import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import DefaultLayerAccount from '../DefaultLayoutAccount';
import Button from '~/components/Button';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import ToastMessage, { success, error } from '~/components/Toast';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword1, setNewPassword1] = useState('');
    const [newPassword2, setNewPassword2] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = async () => {
        try {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');

            if (!tokenREFRESH) {
                navigate('/login', { replace: true });
                return;
            }

            try {
                await axios.post(
                    'http://localhost:2001/api/auth/changepassword',
                    {
                        oldPass: oldPassword,
                        password: newPassword1,
                    },
                    {
                        headers: {
                            Authorization: tokenACCESS,
                        },
                    },
                );

                success('Đổi mật khẩu thành công');
            } catch (err) {
                console.log(err.message);
                if (err.message === 'Request failed with status code 400') {
                    throw new Error('Mật khẩu cũ không chính xác');
                }
                const newTokenAccess = GetNewAccessToken();
                try {
                    await axios.post(
                        'http://localhost:2001/api/auth/changepassword',
                        {
                            oldPass: oldPassword,
                            newPass: newPassword1,
                        },
                        {
                            headers: {
                                Authorization: newTokenAccess,
                            },
                        },
                    );

                    success('Đổi mật khẩu thành công');
                } catch (e) {
                    error(e.message);
                    throw new Error('Lỗi mật khẩu cũ không đúng');
                }
            }
        } catch (error) {
            console.log(error.message);
            throw new Error(error?.message);
        }
    };

    return (
        <DefaultLayerAccount>
            <div>
                <div className="uppercase text-[19px] mt-[10px] mb-[27px] text-[#212B25] font-normal">Đổi mật khẩu</div>
                <div>
                    <div className="text-[14px] mb-[15px]">
                        Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
                    </div>
                    <div className="py-[8px] mb-[10px]">
                        <div className="uppercase text-[12px] font-medium mb-[10px] flex">
                            Mật khẩu cũ<div className="ml-[5px]">*</div>
                        </div>
                        <input
                            type="text"
                            className="h-[38px] bg-[#fff] w-full px-[15px] border border-[#e5e5e5] rounded-[3px] outline-0 shadow-none"
                            placeholder="Mật khẩu cũ"
                            value={oldPassword}
                            onChange={(e) => {
                                setOldPassword(e.target.value);
                            }}
                        />
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
                                if (newPassword1 !== oldPassword) {
                                    await handleChangePassword();
                                    setTimeout(() => {
                                        navigate('/account', { replace: true });
                                    }, 2000);
                                } else {
                                    throw new Error('Mật khẩu mới và cũ không được trùng nhau');
                                }
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
            </div>
            <ToastMessage />
        </DefaultLayerAccount>
    );
}

export default ChangePassword;
