import {
    faCopyright,
    faEnvelope,
    faGift,
    faHouse,
    faLocationDot,
    faPhone,
    faTruckFast,
    faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

function Footer() {
    return (
        <div className="flex flex-col font-medium justify-center mt-[60px] max-w-full">
            <div className="lg:mx-[200px]">
                <div className=" lg:flex justify-center lg:mx-[-15px] box-border w-[full]">
                    <div className="flex flex-col items-center justify-center w-[full] mb-[10px] lg:w-[25%] lg:px-[15px] lg:mr-[20px]">
                        <div className="pt-[4px] pb-[30px]">
                            <img
                                src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/logo.png?1675329140775"
                                alt="logo"
                            />
                        </div>

                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faTruckFast} className="mr-[4px]" />
                            <div className="pl-[10px]">Ship COD toàn quốc</div>
                        </div>

                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faGift} className="mr-[4px]" />
                            <div className="pl-[10px]">FREESHIP đơn hàng từ 700.000đ</div>
                        </div>
                    </div>

                    <div className="flex flex-col ml-[10px] justify-center w-[full] lg:w-[25%] font-semibold">
                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faHouse} />
                            <div className="pl-[10px]">CLOWNZ STORE</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <div className="pl-[10px]">45 Núi Trúc, Ba Đình, HN</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <div className="pl-[10px]">19 Hồ Đắc Di, Đống Đa, HN</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div className="pl-[10px]">danghao1209@gmail.com</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <FontAwesomeIcon icon={faPhone} />
                            <div className="pl-[10px]">090470 8362</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[full] lg:w-[25%]">
                        <div className="pt-[4px] pb-[30px] font-semibold">CHÍNH SÁCH</div>
                        <Link className="flex items-center mb-[15px] hover:text-red-600">
                            <FontAwesomeIcon icon={faX} className="mr-[5px]" />
                            <div>CHÍNH SÁCH THÀNH VIÊN</div>
                        </Link>
                        <Link className="flex items-center mb-[15px] hover:text-red-600">
                            <FontAwesomeIcon icon={faX} className="mr-[5px]" />
                            <div>CHÍNH SÁCH ĐỔI TRẢ</div>
                        </Link>
                        <Link className="flex items-center mb-[15px] hover:text-red-600">
                            <FontAwesomeIcon icon={faX} className="mr-[5px]" />
                            <div>CHÍNH SÁCH VẬN CHUYỂN</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[full] lg:w-[25%] ">
                        <div className="font-semibold pt-[4px] pb-[30px]">ĐĂNG KÝ NHẬN TIN</div>
                        <div className="lg:mb-[15px] text-center">
                            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
                        </div>
                        <div className="flex h-[42px] mb-[8px]">
                            <input
                                className="px-[10px] focus:outline-none bg-gray-200"
                                type="email"
                                placeholder="Email của bạn"
                            />
                            <Button className="px-[28px] bg-lime-600 text-white lg:w-[144px] ">
                                <div className="font-semibold ">ĐĂNG KÝ</div>
                            </Button>
                        </div>
                        <div className="w-[full]">
                            <div className="flex mt-[20px] mb-[15px]">
                                <div className="mr-[10px]">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/payment_1.svg?1675329140775"
                                        alt=""
                                    />
                                </div>
                                <div className="mr-[10px]">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/payment_2.svg?1675329140775"
                                        alt=""
                                    />
                                </div>
                                <div className="mr-[10px]">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/payment_3.svg?1675329140775"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-[10px]">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/payment_5.svg?1675329140775"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[100%] lg:text-[14px] text-[12px] pt-[5px] flex justify-center items-center font-light border-t border-[#f5f5f5]">
                <div>
                    <FontAwesomeIcon icon={faCopyright} />
                </div>
                <div className="ml-[4px]">
                    Bản quyền thuộc về Clownz Store | Cung cấp bởi{' '}
                    <a href="https://fb.com/haotamht" target="_blank" rel="noreferrer">
                        Đăng Hào
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
