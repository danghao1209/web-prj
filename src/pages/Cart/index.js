import { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import Cart from './Cart';

function CartPage() {
    const [cart, setCart] = useState();
    useEffect(() => {
        async function fectCart() {}
        fectCart();
    });
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
                            {true ? (
                                <div>
                                    <Cart data={''} />
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
