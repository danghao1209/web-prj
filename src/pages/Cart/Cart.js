import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProInCart from './ProInCart';
import Button from '~/components/Button';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
    const { cart } = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const tokenACCESS = localStorage.getItem('tokenACCESS');
    //     const tokenREFRESH = localStorage.getItem('tokenREFRESH');
    //     if (!tokenREFRESH) {
    //         navigate('/login', { replace: true });
    //         return;
    //     }
    //     dispatch(getDataProInCart(tokenACCESS));
    // }, [cart, dispatch]);

    return (
        <div className="px-[15px] lg:px-[0px] lg:mx-[-15px] lg:flex">
            <div className="lg:w-[75%] lg:px-[15px]">
                {cart?.carts?.map((item, i) => {
                    return <ProInCart key={item.id + i} data={item}></ProInCart>;
                })}
            </div>
            <div className="w-full lg:w-[25%] px-[15px]">
                <div className="flex flex-col w-full">
                    <div className="hidden lg:flex flex-col w-full">
                        <div className="flex items-center justify-between pt-[17px] pb-[21px]">
                            <div className="font-medium">Tạm tính:</div>
                            <div className="font-bold">1.216.000₫</div>
                        </div>
                        <div className="flex items-center justify-between pt-[17px] pb-[21px] border-t border-[#f5f5f5]">
                            <div className="mt-[5px] font-medium">Thành tiền:</div>
                            <div className="text-[22px] text-[#dc4e3f] font-bold">1.216.000₫</div>
                        </div>
                    </div>

                    <div className="lg:hidden flex justify-between items-center">
                        <div className="font-medium uppercase">Tổng Tiền</div>
                        <div className="text-[#dc4e3f]">1.216.000₫</div>
                    </div>
                    <Button className="w-full h-[40px] lg:h-[50px] mt-[10px] px-[15px] text-[#fff] bg-[#000] hover:text-[#000] hover:bg-[#fff] uppercase border border-[#000] text-center">
                        Thanh toán ngay
                    </Button>
                    <Link to="/">
                        <div className="w-full h-[40px] lg:h-[50px] mt-[10px] px-[15px] text-[#000] bg-[#fff] hover:text-[#fff] hover:bg-[#000] uppercase border border-[#000] flex items-center justify-center cursor-pointer">
                            Tiếp tục mua hàng
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
