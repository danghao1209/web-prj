import _ from 'lodash';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Link, useNavigate } from 'react-router-dom';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import { changeQuantity, deleteProduct } from '~/features/cartSlice';
import GetNewAccessToken from '~/func/GetNewAccessToken';

export default function ProInCart({ data }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(data.quantity);
    const [dataPro, setDataPro] = useState();
    const { dataProAll } = useSelector((state) => state.productsAll);

    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const foundItem = _.find(dataProAll.products, { _id: data.id });
            setDataPro(foundItem);
        })();
    }, [dataProAll]);

    const handleQuantityChange = async () => {
        try {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');
            if (!tokenREFRESH) {
                throw new Error('lỗi đổi số lượng');
            }
            if (quantity !== null) {
                dispatch(changeQuantity({ id: data._id, quantity, tokenACCESS }));
            }
        } catch (error) {
            localStorage.removeItem('tokenACCESS');
            localStorage.removeItem('tokenREFRESH');
            navigate('/login', { replace: true });
        }
    };

    const handleProductDelete = () => {
        try {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');
            if (!tokenREFRESH) {
                throw new Error('lỗi xoá sản phẩm');
            }
            dispatch(deleteProduct({ id: data._id, tokenACCESS }));
        } catch (error) {
            localStorage.removeItem('tokenACCESS');
            localStorage.removeItem('tokenREFRESH');
            navigate('/login', { replace: true });
        }
    };

    const [value] = useDebounce(quantity, 2000);
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');

            if (!tokenREFRESH) {
                navigate('/login', { replace: true });
                return;
            }
            if (quantity !== null) {
                (async () => {
                    try {
                        await handleQuantityChange(tokenACCESS);
                    } catch (error) {
                        try {
                            const newTokenAccess = GetNewAccessToken();
                            await handleQuantityChange(newTokenAccess);
                        } catch (error) {
                            localStorage.removeItem('tokenACCESS');
                            localStorage.removeItem('tokenREFRESH');
                            navigate('/login', { replace: true });
                        }
                    }
                })();
            }
        }
    }, [value, dispatch]);

    return (
        <div className="py-[15px] flex justify-center items-center border-t border-[#f5f5f5]">
            <div className="w-[25%] pr-[15px]">
                <Link>
                    <img
                        src={`http://localhost:1209/${dataPro?.data[data.color].images[0]}`}
                        alt=""
                        className="max-h-[180px] max-w-auto h-auto"
                    />
                </Link>
            </div>
            <div className="w-[75%] flex items-center">
                <div className=" px-[15px] w-[350px]">
                    <div className="text-[#242424] text-[14px] font-medium mb-[7px]">
                        <Link to={''} className="lg:flex">
                            {/* rendersize và màu ở đây */}
                            <Link className="" to={`/product/${data._id}`}>
                                {dataPro?.title} -{' '}
                            </Link>
                            <div className="flex items-center">
                                <div
                                    className={`w-[15px] h-[15px] ml-[3px] mr-[5px] ${
                                        dataPro?.data[data.color].color
                                    } border border-[#e5e5e5]`}
                                ></div>{' '}
                                / {data.size.toUpperCase()}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Button className="text-[#dc4e3f] text-[13px]" onClick={() => handleProductDelete()}>
                            Xoá
                        </Button>
                    </div>
                </div>
                <div className="pr-[10px] w-[110px]">
                    <div className="text-[#dc4e3f] text-[14px] lg:text-[16px] font-medium mb-[5px]">
                        {dataPro?.price}.000₫
                    </div>
                </div>
                <div className="px-[15px] w-[120px] float-right flex justify-end items-center">
                    <div className="flex text-[14px] justify-center items-center">
                        <Button
                            className="w-[28px] px-[9px] py-[3px] text-[#999] border border-[#e5e5e5] rounded-l-[3px] "
                            onClick={() => {
                                if (quantity >= 2) {
                                    setQuantity(quantity - 1);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <input
                            className="w-[35px] min-h-[29px] px-[5px] border border-[#e5e5e5] text-center outline-0 cursor-default"
                            value={quantity}
                        />
                        <Button
                            className="w-[28px] px-[9px] py-[3px] text-[#999] border border-[#e5e5e5] rounded-r-[3px]"
                            onClick={() => {
                                setQuantity(quantity + 1);
                                if (quantity >= 999) setQuantity(999);
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
