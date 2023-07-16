import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '~/components/Button';
import ToastMessage, { success, error } from '~/components/Toast';
import { authApi } from '~/asset/path';

function SubmitNewPassword() {
    const [newPassword1, setNewPassword1] = useState('');
    const [newPassword2, setNewPassword2] = useState('');
    const navigate = useNavigate();
    async function submitNewPassword() {
        try {
            const token = localStorage.getItem('otp_token');
            if (!token) {
                throw new Error('Lỗi');
            }

            await axios.post(
                `${authApi}/submit-forgot-password`,
                {
                    password: newPassword1,
                },
                {
                    headers: {
                        'Otp-Token': token,
                    },
                },
            );
            success('Đổi mật khẩu thành công');
        } catch (er) {
            error(er.message);
            return null;
        }
    }
    return (
        <div className="pt-[30px] lg:pt-[105px] pb-[30px] w-[80%] lg:w-[45%] mx-auto">
            <div className="uppercase text-[19px] mt-[10px] mb-[27px] text-[#212B25] font-normal">
                Xác nhận mật khẩu
            </div>
            <div>
                <div className="text-[14px] mb-[15px]">
                    Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 6 kí tự
                </div>
                <div className="py-[8px] mb-[10px]">
                    <div className="uppercase text-[12px] font-medium mb-[10px] flex">
                        Mật khẩu mới <div className="ml-[5px]">*</div>
                    </div>

                    <input
                        type="text"
                        className="h-[38px] bg-[#fff] w-full px-[15px] border border-[#e5e5e5] rounded-[3px] outline-0 shadow-none"
                        placeholder="Mật khẩu mới"
                        value={newPassword1}
                        onChange={(e) => {
                            setNewPassword1(e.target.value);
                        }}
                    />
                </div>
                <div className="py-[8px] mb-[10px]">
                    <div className="uppercase text-[12px] font-medium mb-[10px] flex">
                        Xác nhận lại mật khẩu<div className="ml-[5px]">*</div>
                    </div>
                    <input
                        type="text"
                        className="h-[38px] bg-[#fff] w-full px-[15px] border border-[#e5e5e5] rounded-[3px] outline-0 shadow-none"
                        placeholder="Xác nhận lại mật khẩu"
                        value={newPassword2}
                        onChange={(e) => {
                            setNewPassword2(e.target.value);
                        }}
                    />
                </div>
            </div>
            <Button
                onClick={async () => {
                    try {
                        if (newPassword1 === newPassword2) {
                            await submitNewPassword();
                            setTimeout(() => {
                                navigate('/login', { replace: true });
                            }, 2000);
                        } else {
                            throw new Error('Mật khẩu mới không trùng nhau');
                        }
                    } catch (e) {
                        error(e.message);
                    }
                }}
                className="bg-[#1c1c1c] font-medium px-[28px] h-[40px] text-[#fff] text-[12px] border-0 outline-0 transition-all hover:bg-[#fff] hover:text-[#1c1c1c] hover:border hover:border-[#1c1c1c] duration-450 ease-cubic"
            >
                ĐẶT LẠI MẬT KHẨU
            </Button>
            <ToastMessage />
        </div>
    );
}

export default SubmitNewPassword;
