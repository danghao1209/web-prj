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
                const result = await axios.post('http://localhost:1209/api/login', { email, password });

                if (result.data.status === 1) {
                    success(result.data.message);
                    localStorage.setItem('tokenUser', result.data.token);
                    await setTimeout(() => {
                        navigate('/', { replace: true });
                    }, 3000);
                    return null;
                } else {
                    error(result.data.message);
                    localStorage.removeItem('tokenUser');
                    await setTimeout(() => {
                        navigate('/login', { replace: true });
                    }, 3000);
                    return null;
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
            <div className="text-[26px] mt-[20px]">ĐĂNG NHẬP TÀI KHOẢN</div>
            <div className="w-[45%] mb-[20px]">
                <label className=" text-[14px]">EMAIL</label>
                <div className="mt-[10px]">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập Địa Chỉ Email"
                    />
                </div>
            </div>
            <div className="w-[45%]  mb-[20px]">
                <label className="text-[14px]">MẬT KHẨU</label>
                <div className="mt-[10px] ">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập Địa Mật Khẩu"
                    />
                </div>
            </div>
            <div>
                <Button
                    className="bg-black text-white text-[13px] px-[88px] font-medium h-[48px] mt-[15px] border border-black hover:opacity-75"
                    onClick={onLogin}
                >
                    ĐĂNG NHẬP
                </Button>
            </div>
            <div className="my-[15px]">
                <Link to="/quenmatkhau">
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
