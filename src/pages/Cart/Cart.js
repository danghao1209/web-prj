import { Link } from 'react-router-dom';
import ProInCart from './ProInCart';
import Button from '~/components/Button';

function Cart({ data }) {
    return (
        <div className="mx-[-15px] flex">
            <div className="w-[75%] px-[15px]">
                {data
                    ? data.map((item, i) => {
                          return <ProInCart data={item}></ProInCart>;
                      })
                    : ''}
            </div>
            <div className="w-[25%] px-[15px]">
                <div className="w-full flex flex-col">
                    <div className="flex items-center justify-between pt-[17px] pb-[21px]">
                        <div className="font-medium">Tạm tính:</div>
                        <div className="font-bold">1.216.000₫</div>
                    </div>
                    <div className="flex items-center justify-between pt-[17px] pb-[21px] border-t border-[#f5f5f5]">
                        <div className="mt-[5px] font-medium">Thành tiền:</div>
                        <div className="text-[22px] text-[#dc4e3f] font-bold">1.216.000₫</div>
                    </div>
                    <Button className="w-full h-[50px] mt-[10px] px-[15px] text-[#fff] bg-[#000] hover:text-[#000] hover:bg-[#fff] uppercase border border-[#000] text-center">
                        Thanh toán ngay
                    </Button>
                    <Link to="/">
                        <div className="w-full h-[50px] mt-[10px] px-[15px] text-[#000] bg-[#fff] hover:text-[#fff] hover:bg-[#000] uppercase border border-[#000] flex items-center justify-center cursor-pointer">
                            Tiếp tục mua hàng
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
