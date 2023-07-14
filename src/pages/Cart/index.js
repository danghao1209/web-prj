import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setCart } from '~/features/cartSlice';
import EmptyCart from './EmptyCart';
import Cart from './Cart';
import { CircularProgress } from '@mui/material';

const getCart = async (tokenACCESS) => {
    try {
        const data = await axios.get('http://localhost:1209/api/cart', {
            headers: {
                Authorization: tokenACCESS,
            },
        });
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

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
                const cartData = await getCart(tokenACCESS);
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
                    const newCart = await getCart(newTokenAccess.data.tokenACCESS);
                    dispatch(setCart(newCart.data.data));
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
        <div className="pt-[20px] pb-[10px] lg:pt-[48px] lg:[pb-[0px]]">
            <div className="lg:mx-[209px] lg:mt-[30px] lg:mb-[20px] lg:px-[15px]">
                <div className="lg:mx-[-15px]">
                    <div className="lg:px-[15px]">
                        <div className="mb-[10px]">
                            <div className="lg:mx-[-15px]">
                                <div className="hidden lg:flex lg:px-[15px] w-full  items-center relative">
                                    <div className="uppercase text-[26px] text-[#1c1c1c] leading-[28px] m-[0] tracking-[2.4px]">
                                        Giỏ hàng
                                    </div>
                                    <div className="ml-[5px] text-[14px] leading-[28px] tracking-[2.4px] absolute top-[10%] left-[10%]">
                                        (sản phẩm)
                                        {/* phần này sau có thể thêm đếm số sản phẩm vào */}
                                    </div>
                                </div>
                                <div className="uppercase font-medium ml-[5px] lg:mr-[0px] lg:hidden">
                                    Giỏ hàng của bạn
                                </div>
                            </div>
                            {cart?.totalQuanlity > 0 ? (
                                <div>
                                    <Cart />
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
