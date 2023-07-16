import ToastMessage, { success, error, warning } from '~/components/Toast';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createContext, useState } from 'react';
import Button from '~/components/Button';
import OtpInput from './OtpInput';
import SubmitNewPassword from './SubmitNewPassword';
import { authApi } from '~/asset/path';

export const RecoveryContext = createContext();
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [page, setPage] = useState('login');

    const onGetOTP = async () => {
        try {
            if (email) {
                await axios.post(`${authApi}/otp-forgot-password`, { email: email });
                success('Đã gửi OTP');
                setTimeout(() => {
                    setPage('otp');
                }, 2000);
            } else {
                warning('Vui lòng điền email');
            }
        } catch (er) {
            error(er.message);
            localStorage.removeItem('');
            return null;
        }
    };
    function NavigateComponents() {
        if (page === 'otp') return <OtpInput email={email} setPage={setPage} />;
        if (page === 'submit') return <SubmitNewPassword />;
        return (
            <div className="lg:pt-[105px] flex justify-center flex-col items-center ">
                <div className="text-[26px] mt-[20px]">ĐẶT LẠI MẬT KHẨU</div>
                <div className="mt-[10px] mb-[30px] text-[14px] leading-[24px] text-[#333] tracking-[0.5px]">
                    Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu.
                </div>
                <div className="w-[80%] lg:w-[45%] mb-[20px]">
                    <label className=" text-[14px] flex">
                        EMAIL <div className="text-red-600">*</div>
                    </label>
                    <div className="w-full mt-[10px]">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập Địa Chỉ Email"
                        />
                    </div>
                </div>

                <div>
                    <Button
                        className="bg-black text-white text-[13px] px-[60px] lg:px-[88px] font-medium h-[48px] mt-[15px] border border-black hover:opacity-75"
                        onClick={onGetOTP}
                    >
                        Lấy Lại Mật Khẩu
                    </Button>
                </div>
                <div className="my-[15px]">
                    <Link to="/login">
                        <div className="text-red-600">Đăng Nhập</div>
                    </Link>
                </div>

                <div className="text-[13px] uppercase mb-[15px]">
                    bạn chưa có tài khoản. đăng kí
                    <Link to="/register" className="text-red-600">
                        {' '}
                        tại đây.
                    </Link>
                </div>
                <ToastMessage />
            </div>
        );
    }

    return (
        <div className="">
            <NavigateComponents />
        </div>
    );
}

export default ForgotPassword;
