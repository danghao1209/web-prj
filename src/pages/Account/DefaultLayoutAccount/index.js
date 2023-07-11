import { Link } from 'react-router-dom';
import ToastMessage from '~/components/Toast';

function DefaultLayoutAccount({ children }) {
    return (
        <div className="mt-[105px] mb-[250px]">
            <div className="py-[20px] mb-[30px]">
                <div className="w-[77%] mx-[10px] lg:mx-[auto] mb-[20px] px-[15px]">
                    <div className="mx-[-15px] lg:flex">
                        <div className="lg:w-[25%] lg:px-[15px]">
                            <div className="text-[19px] mt-[10px] mb-[7px]">TRANG TÀI KHOẢN</div>
                            <div className="font-bold text-[14px] mb-[28px]">Xin chào, Đăng Hào !</div>
                            <Link to="/account">
                                <div className="text-[14px] mb-[10px]">Thông tin tài khoản</div>
                            </Link>
                            <Link to="/account/orders">
                                <div className="text-[14px] mb-[10px]">Đơn hàng của bạn</div>
                            </Link>
                            <Link to="/account/changepassword">
                                <div className="text-[14px] mb-[10px]">Đổi mật khẩu</div>
                            </Link>
                            <Link to="/account/addresses">
                                <div className="text-[14px] mb-[10px]">Sổ địa chỉ(0)</div>
                            </Link>
                        </div>
                        <div className="w-[75%] ">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoutAccount;
