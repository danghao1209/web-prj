import logo from '~/asset/images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import ListItemCheckOut from './ListItemCheckOut';

function DoneBuy({ sold }) {
    return (
        <div className="py-[20px]">
            <div className="lg:max-w-[95em] w-full lg:px-[2em] lg:mx-auto">
                <div className="lg:flex pb-[1.5em] justify-center relative">
                    <div className="lg:absolute lg:top-0 lg:left-0 flex items-center justify-center lg:block lg:pb-[1.5em] border-b lg:border-b-0 pb-[10px] drop-shadow-md">
                        <Link to={'/'} className="w-[300px] pb-[10px]">
                            <img src={logo} alt="Logo" className="w-[300px] lg:w-[400px]" />
                        </Link>
                    </div>

                    <div className="flex-col-reverse lg:flex lg:flex-row w-full lg:pt-[20px]">
                        <div className="lg:w-[60%] px-[10px] lg:px-[2em] pt-[2em] lg:border-r lg:mt-[30px]">
                            <div className="flex lg:mb-[30px] ml-[10px]">
                                <div className="font-thin mr-[16px] text-[#7FFFD4]">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[72px] h-[72px]" />
                                </div>
                                <div className="">
                                    <div className="font-medium">Cảm ơn bạn đã đặt hàng</div>
                                    <div className="text-[14px]">
                                        <div>Một email xác nhận đã được gửi tới {sold?.data?.email}.</div>
                                        <div>Xin vui lòng kiểm tra email của bạn</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border m-[14px] p-[14px]">
                                <div className="flex ">
                                    <div className="w-[50%] mx-[14px]">
                                        <div className="text-[16px] mb-[10px]">Thông tin mua hàng</div>
                                        <div className="mb-[5px]">{sold?.data?.name}</div>
                                        <div className="mb-[5px]">{sold?.data?.email}</div>
                                        <div className="mb-[5px]">{sold?.data?.phone}</div>
                                    </div>
                                    <div className="w-[50%] mx-[14px]">
                                        <div className="text-[16px] mb-[10px]">Địa chỉ nhận hàng</div>
                                        <div className="mb-[5px]">{sold?.data?.address}</div>
                                        <div className="mb-[5px]">Xã , Huyện , Tỉnh</div>
                                    </div>
                                </div>
                                <div className="flex mt-[20px]">
                                    <div className="w-[50%] mx-[14px]">
                                        <div className="text-[16px] mb-[10px]">Phương thức thanh toán</div>
                                        <div className="mb-[5px]">Thanh toán khi giao hàng (COD)</div>
                                    </div>
                                    <div className="w-[50%] mx-[14px]">
                                        <div className="text-[16px] mb-[10px]">Phương thức vận chuyển</div>
                                        <div className="mb-[5px]">Chuyển phát nhanh</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[40%]">
                            <div className="border-b pl-[10px] lg:pl-[2em] py-[20px]">
                                <div className="text-[1.15rem] text-[#333] font-semibold">
                                    Đơn hàng ({sold?.cart?.totalQuanlity} sản phẩm)
                                </div>
                            </div>
                            <div className="px-[20px] lg:px-0 lg:pl-[2em] text-[#717171]">
                                <div className="w-full">
                                    <div className="py-[1em] overflow-x-auto max-h-calc-viewport-minus-480">
                                        {sold?.data?.carts?.map((item, i) => {
                                            return <ListItemCheckOut key={item.id + i} data={item}></ListItemCheckOut>;
                                        })}
                                    </div>

                                    <div className="py-[1em] border-t text-[16px]">
                                        <div>
                                            <div className="flex items-center justify-between px-[20px] pt-[10px]">
                                                <div>Tạm tính:</div>
                                                <div>{sold?.data?.priceCart?.discountPrice}.000₫</div>
                                            </div>
                                            <div className="flex items-center justify-between px-[20px] pt-[10px]">
                                                <div>Phí vận chuyển:</div>
                                                <div>30.000₫</div>
                                            </div>
                                            <div className="flex items-center justify-between px-[20px] font-semibold pt-[10px]">{`Freeship đơn hàng >700k`}</div>
                                        </div>
                                    </div>
                                    <div className="py-[1em] border-t">
                                        <div className="flex items-center justify-between px-[20px]">
                                            <div className="text-[20px]">Tổng cộng</div>
                                            <div className="text-[20px] text-[#2a9dcc] font-semibold">
                                                {sold?.data?.priceLast}.000₫
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center mt-[50px]">
                <Link to="/" className="px-[30px] py-[16px] bg-[#357ebd] text-[18px] text-[#fff] rounded-[4px]">
                    Tiếp tục mua hàng
                </Link>
            </div>
        </div>
    );
}

export default DoneBuy;
