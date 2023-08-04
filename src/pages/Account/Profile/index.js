import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { setLoading, setProfileData, setError } from '~/features/userSlice';
import DefaultLayoutAccount from '~/pages/Account/DefaultLayoutAccount';
import { pathApi } from '~/asset/path';
import GetNewAccessToken from '~/func/GetNewAccessToken';

const fetchData = (tokenACCESS) =>
    axios.get(`${pathApi}/info`, {
        headers: {
            Authorization: tokenACCESS,
        },
    });

function ProfilePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { profileData, isLoading } = useSelector((state) => state.user);

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

    if (isLoading) {
        return (
            <DefaultLayoutAccount>
                <div className="flex items-center justify-center">
                    <CircularProgress color="inherit" />
                </div>
            </DefaultLayoutAccount>
        );
    }

    return (
        <DefaultLayoutAccount>
            <div>
                <div className="uppercase text-[19px] mt-[30px] mb-[27px] text-[#212B25] font-normal">
                    Thông Tin Tài Khoản
                </div>
                {/* sau này sử dụng vòng lặp với api */}
                <div>
                    <div className="flex text-[14px] mb-[15px]">
                        <strong className="mr-[5px]">Họ tên: </strong>
                        <div>{profileData ? profileData.name : ''}</div>
                        {console.log(profileData)}
                    </div>
                    <div className="flex text-[14px] mb-[15px]">
                        <strong className="mr-[5px]">Email: </strong>
                        <div>{profileData ? profileData.email : ''}</div>
                    </div>
                </div>
            </div>
        </DefaultLayoutAccount>
    );
}

export default ProfilePage;
