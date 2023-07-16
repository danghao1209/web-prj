import { Link } from 'react-router-dom';
import emtyCart from '~/asset/images/empty-cart.png';
function EmptyCart() {
    return (
        <div className="mx-[-15px]">
            <div className="max-w-[200px] h-[auto] mx-[auto]">
                <img src={emtyCart} alt="" />
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
    );
}

export default EmptyCart;
