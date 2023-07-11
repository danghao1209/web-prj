import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import ToastMessage, { success, error, warning } from '~/components/Toast';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = async () => {
        try {
            if (email && password) {
                const result = await axios.post('http://localhost:2001/api/auth/login', { email, password });

                if (result.data.status === 1) {
                    success(result.data.message);
                    localStorage.setItem('tokenACCESS', result.data.tokenACCESS);
                    localStorage.setItem('tokenREFRESH', result.data.tokenREFRESH);

                    setTimeout(() => {
                        navigate('/', { replace: true });
                    }, 3000);
                    return;
                } else {
                    error(result.data.message);
                    localStorage.removeItem('tokenACCESS');
                    localStorage.removeItem('tokenREFRESH');
                    return;
                }
            } else {
                warning('Vui lòng điền tài khoản và mật khẩu');
            }
        } catch (er) {
            error('Sai tài khoản hoặc mật khẩu');
            localStorage.removeItem('tokenUser');
            setPassword('');
            return null;
        }
    };

    return (
        <div className="mt-[105px] flex justify-center flex-col items-center ">
            <div className="text-[26px] mt-[20px] lg:py-[30px]">ĐĂNG NHẬP TÀI KHOẢN</div>
            <div className="w-[80%] lg:w-[45%] mb-[20px]">
                <label className=" text-[14px] flex">
                    EMAIL <div className="text-red-600">*</div>
                </label>
                <div className="mt-[10px]">
                    <input
                        className="bg-[#f7f7f7] px-[20px] appearance-none border border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập Địa Chỉ Email"
                    />
                </div>
            </div>
            <div className="w-[80%] lg:w-[45%]  mb-[20px]">
                <label className="text-[14px] flex">
                    MẬT KHẨU <div className="text-red-600">*</div>
                </label>
                <div className="mt-[10px] ">
                    <input
                        className="bg-[#f7f7f7] px-[20px] appearance-none border border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none focus:bg-white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập Địa Mật Khẩu"
                    />
                </div>
            </div>
            <div>
                <Button
                    className="bg-black text-white text-[13px] px-[60px] lg:px-[88px] font-medium h-[48px] mt-[15px] border border-black hover:opacity-75"
                    onClick={onLogin}
                >
                    ĐĂNG NHẬP
                </Button>
            </div>
            <div className="my-[15px]">
                <Link to="/forgotpassword">
                    <div className="text-red-600">Quên mật khẩu?</div>
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

export default Login;
