import { Link } from 'react-router-dom';

function CartPage() {
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
                            <div className="mx-[-15px]">
                                <div className="max-w-[200px] h-[auto] mx-[auto]">
                                    <img
                                        src="//bizweb.dktcdn.net/100/325/189/themes/675912/assets/empty-cart.png?1533693226542"
                                        alt=""
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Link
                                        to="/"
                                        className="h-[auto] mt-[20px] px-[30px] py-[15px] text-[#fff] text-[14px] uppercase leading-[1.1] bg-[#1c1c1c] hover:bg-[#dc4e3f] hover:text-[#fff]"
                                    >
                                        Tiếp tục lựa chọn
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
