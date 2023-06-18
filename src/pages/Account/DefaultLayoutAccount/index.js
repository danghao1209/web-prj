import { Link } from 'react-router-dom';

function DefaultLayoutAccount({ children }) {
    return (
        <div className="mt-[105px] mb-[250px]">
            <div className="py-[20px] mb-[30px]">
                <div className="w-[77%] mx-[auto] mb-[20px] px-[15px]">
                    <div className="mx-[-15px] flex">
                        <div className="w-[25%] px-[15px]">
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
