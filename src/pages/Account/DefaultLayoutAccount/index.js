import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { pathApi } from '~/asset/path';
import { setLoading, setProfileData, setError } from '~/features/userSlice';
import GetNewAccessToken from '~/func/GetNewAccessToken';

function DefaultLayoutAccount({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { profileData, isLoading } = useSelector((state) => state.user);

    const fetchData = (tokenACCESS) =>
        axios.get(`${pathApi}/info`, {
            headers: {
                Authorization: tokenACCESS,
            },
        });
    useEffect(() => {
        if (!profileData) {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');

            if (!tokenREFRESH) {
                navigate('/login', { replace: true });
                return;
            }
            (async () => {
                try {
                    dispatch(setLoading(true));
                    const response = await fetchData(tokenACCESS);
                    dispatch(setProfileData(response.data.data));
                    dispatch(setLoading(false));
                } catch (error) {
                    try {
                        const newTokenAccess = await GetNewAccessToken();
                        localStorage.setItem('tokenACCESS', newTokenAccess.data.tokenACCESS);
                        const newProfileData = await fetchData(newTokenAccess.data.tokenACCESS);
                        dispatch(setProfileData(newProfileData.data.data));
                    } catch (error) {
                        localStorage.removeItem('tokenACCESS');
                        localStorage.removeItem('tokenREFRESH');
                        dispatch(setError(error));
                        navigate('/login', { replace: true });
                    } finally {
                        dispatch(setLoading(false));
                    }
                }
            })();
        }
        return;
    }, []);

    return (
        <div className="mt-[105px] mb-[250px]">
            <div className="py-[20px] mb-[30px]">
                <div className="lg:w-[77%] mx-[10px] lg:mx-[auto] mb-[20px] px-[15px]">
                    <div className="mx-[-15px] lg:flex">
                        <div className="lg:w-[25%] lg:px-[15px]">
                            <div className="text-[19px] mt-[10px] mb-[7px]">TRANG TÀI KHOẢN</div>
                            <div className="font-bold text-[14px] mb-[28px]">
                                Xin chào, {profileData ? profileData.name : ''} !
                            </div>
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
                                <div className="text-[14px] mb-[10px]">Sổ địa chỉ</div>
                            </Link>
                        </div>
                        <div className="w-full lg:w-[75%] ">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoutAccount;
