import DefaultLayerAccount from '../DefaultLayoutAccount';
import Button from '~/components/Button';
import Modal from './Modal';
import ModalEditAdrress from './ModalEditAddress';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import { useNavigate } from 'react-router-dom';
import { error } from '~/components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { setAddressData } from '~/features/userSlice';
import { DataAddress } from '~/asset/files/DataAdress';
import { pathApi } from '~/asset/path';

function Addresses() {
    const [isShow, setIsShow] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { addressData } = useSelector((state) => state.user);

    const handleShow = () => {
        setIsShow(true);
    };
    const handleClose = () => {
        setIsShow(false);
    };
    const handleShowEdit = () => {
        setIsShowEdit(true);
    };
    const handleCloseEdit = () => {
        setIsShowEdit(false);
    };

    useEffect(() => {
        (async () => {
            try {
                const tokenACCESS = localStorage.getItem('tokenACCESS');
                const tokenREFRESH = localStorage.getItem('tokenREFRESH');

                if (!tokenREFRESH) {
                    navigate('/login', { replace: true });
                    return;
                }
                try {
                    const dataFetch = await axios.get(`${pathApi}/info/address`, {
                        headers: {
                            Authorization: tokenACCESS,
                        },
                    });
                    dispatch(setAddressData(dataFetch.data.data));
                } catch (err) {
                    const newTokenAccess = await GetNewAccessToken();
                    try {
                        const dataFetch = await axios.get(
                            `${pathApi}/info/address`,

                            {
                                headers: {
                                    Authorization: newTokenAccess,
                                },
                            },
                        );
                        dispatch(setAddressData(dataFetch.data.data));
                    } catch (e) {
                        throw new Error(e);
                    }
                }
            } catch (err) {
                console.log(err.message);
                error(err.message);
            }
        })();
    }, []);

    return (
        <DefaultLayerAccount>
            <div>
                <div className="uppercase text-[19px] mt-[30px] lg:mt-[10px] mb-[27px] text-[#212B25] font-normal">
                    Địa Chỉ Của Bạn
                </div>
                {addressData?.address ? (
                    <div>
                        <div className="px-[15px] text-[14px]">
                            <div className="pt-[16px] mt-[20px] border-t-[1px] flex">
                                <div className="w-[65%] pb-[5px] mb-[15px]">
                                    <div className="py-[10px]">
                                        <div className="mb-[10px]">
                                            <strong>Họ tên: {addressData?.name}</strong>
                                        </div>
                                        <div className="mb-[10px]">
                                            <strong>Địa chỉ:</strong>{' '}
                                            {`${addressData?.address}, ${
                                                DataAddress[addressData?.tinh?.index]?.Districts[
                                                    addressData?.huyen?.index
                                                ]?.Wards[addressData?.xa?.index]?.Name
                                            }, ${
                                                DataAddress[addressData?.tinh?.index]?.Districts[
                                                    addressData?.huyen?.index
                                                ]?.Name
                                            }, ${DataAddress[addressData?.tinh?.index]?.Name}`}
                                        </div>
                                        <div className="mb-[10px]">
                                            <strong>Số điện thoại:</strong> {addressData?.phone}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[35%] flex justify-center items-center ">
                                    <div className="underline px-[10px] py-[5px]" onClick={handleShowEdit}>
                                        Chỉnh sửa địa chỉ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Button
                        className="bg-[#1c1c1c] font-medium px-[28px] h-[40px] text-[#fff] text-[12px] uppercase border-0 outline-0 transition-all hover:bg-[#fff] hover:text-[#1c1c1c] hover:border hover:border-[#1c1c1c] duration-450 ease-cubic"
                        onClick={handleShow}
                    >
                        Thêm Địa Chỉ
                    </Button>
                )}
            </div>
            <div className="relative">
                <ModalEditAdrress
                    isShow={isShowEdit}
                    setIsShow={setIsShowEdit}
                    handleShow={handleShowEdit}
                    handleClose={handleCloseEdit}
                />
            </div>
            <div className="relative">
                <Modal isShow={isShow} setIsShow={setIsShow} handleShow={handleShow} handleClose={handleClose} />
            </div>
        </DefaultLayerAccount>
    );
}

export default Addresses;
