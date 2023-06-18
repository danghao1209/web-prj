import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setLoading, setCart, setQuanlity, setError } from '~/features/cartSlice';
import EmptyCart from './EmptyCart';
import Cart from './Cart';
import { CircularProgress } from '@mui/material';

const fetchData = (tokenACCESS) =>
    axios.get('http://localhost:1209/api/cart', {
        headers: {
            Authorization: tokenACCESS,
        },
    });
function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, isLoading } = useSelector((state) => state.cart);

    useEffect(() => {
        const tokenACCESS = localStorage.getItem('tokenACCESS');
        const tokenREFRESH = localStorage.getItem('tokenREFRESH');

        if (!tokenREFRESH) {
            navigate('/login', { replace: true });
            return;
        }
        (async () => {
            try {
                const cartData = await fetchData(tokenACCESS);
                dispatch(setCart(cartData.data.data));
            } catch (error) {
                try {
                    const newTokenAccess = await axios.post(
                        'http://localhost:2001/api/auth/token',
                        {},
                        {
                            headers: {
                                'Refresh-Token': tokenREFRESH,
                            },
                        },
                    );
                    localStorage.setItem('tokenACCESS', newTokenAccess.data.tokenACCESS);
                    const newProfileData = await fetchData(newTokenAccess.data.tokenACCESS);
                    dispatch(setCart(newProfileData.data.data));
                } catch (error) {
                    localStorage.removeItem('tokenACCESS');
                    localStorage.removeItem('tokenREFRESH');
                    navigate('/login', { replace: true });
                }
            }
        })();
    }, []);
    if (isLoading) {
        return (
            <div className="px-[50px] mx-[-15px]">
                <div className="flex items-center justify-center">
                    <CircularProgress color="inherit" />
                </div>
            </div>
        );
    }
    return (
        <div className="pt-[108px] ">
            <div className="mx-[209px] mt-[30px] mb-[20px] px-[15px]">
                <div className="mx-[-15px]">
                    <div className="px-[15px]">
                        <div className="mb-[10px]">
                            <div className="mx-[-15px]">
                                <div className="px-[15px] w-full flex items-center relative">
                                    <div className="uppercase text-[26px] text-[#1c1c1c] leading-[28px] m-[0] tracking-[2.4px]">
                                        Giỏ hàng
                                    </div>
                                    <div className="ml-[5px] text-[14px] leading-[28px] tracking-[2.4px] absolute top-[10%] left-[10%]">
                                        (sản phẩm)
                                        {/* phần này sau có thể thêm đếm số sản phẩm vào */}
                                    </div>
                                </div>
                            </div>
                            {/* {cart ? <div>hihi</div> : <EmptyCart />} */}
                            {cart ? (
                                <div>
                                    <Cart data={cart} />
                                </div>
                            ) : (
                                <EmptyCart />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
