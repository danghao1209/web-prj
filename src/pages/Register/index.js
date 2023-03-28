import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import ToastMessage, { promise } from '~/components/Toast';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const onRegister = async () => {
        try {
            let result = await promise(
                axios.post('http://localhost:1209/api/register', { email, password, name, phone }),
                {
                    pending: 'Promise is pending',
                    success: 'Đăng ký thành công',
                    error: 'Đăng ký thất bại',
                },
            );
            if (result.data.status) {
                localStorage.setItem('tokenUser', result.data.token);
                await setTimeout(() => {
                    navigate('/login', { replace: true });
                }, 3000);
                return null;
            } else {
                localStorage.removeItem('tokenUser');
                navigate('/register', { replace: true });
                return null;
            }
        } catch (error) {}
    };
    return (
        <div className="mt-[105px] flex justify-center flex-col items-center ">
            <div className="text-[26px] mt-[20px]">ĐĂNG KÝ TÀI KHOẢN</div>
            <div className="text-[14px] mt-[10px]">Nếu chưa có tài khoản vui lòng đăng ký tại đây</div>
            <div className="w-[35%] text-[14px]">
                <div className="mb-[25px]">
                    <label className="">HỌ TÊN</label>
                    <div className="mt-[10px]">
                        <input
                            className="px-[15px] appearance-none border border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-600 leading-tight focus:outline-none bg-white focus:border-red-300"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nhập Họ Tên"
                        />
                    </div>
                </div>
                <div className="mb-[25px]">
                    <label className="">SỐ ĐIỆN THOẠI</label>
                    <div className="mt-[10px]">
                        <input
                            className="px-[15px] appearance-none border border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none bg-white focus:border-red-300"
                            type="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Nhập Số Điện Thoại"
                        />
                    </div>
                </div>
                <div className="mb-[25px]">
                    <label className="">EMAIL</label>
                    <div className="mt-[10px]">
                        <input
                            className="px-[15px] appearance-none border border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none bg-white focus:border-red-300"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập Địa Chỉ Email"
                        />
                    </div>
                </div>
                <div className="mb-[25px]">
                    <label className="">MẬT KHẨU</label>
                    <div className="mt-[10px] ">
                        <input
                            className="px-[15px] appearance-none border border-gray-200 rounded w-full h-[48px] p-[1px] text-gray-700 leading-tight focus:outline-none bg-white focus:border-red-300"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập Mật Khẩu"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Button
                    className="bg-black text-white text-[13px] px-[88px] font-medium h-[48px] mt-[15px] border border-black hover:opacity-75"
                    onClick={onRegister}
                >
                    ĐĂNG KÝ
                </Button>
            </div>
            <div className="my-[15px]">
                <Link to="/login">
                    <div className="text-red-600">ĐĂNG NHẬP</div>
                </Link>
            </div>

            <ToastMessage />
        </div>
    );
}

export default Register;
