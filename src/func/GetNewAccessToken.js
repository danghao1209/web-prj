import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authApi } from '~/asset/path';

const GetNewAccessToken = async () => {
    const navigate = useNavigate();
    const tokenREFRESH = localStorage.getItem('tokenREFRESH');

    try {
        const newTokenAccess = await axios.post(
            `${authApi}/token`,
            {},
            {
                headers: {
                    'Refresh-Token': tokenREFRESH,
                },
            },
        );
        localStorage.setItem('tokenACCESS', newTokenAccess.data.tokenACCESS);
        return newTokenAccess.data.tokenACCESS;
    } catch (error) {
        localStorage.removeItem('tokenACCESS');
        localStorage.removeItem('tokenREFRESH');
        navigate('/login', { replace: true });
    }
};

export default GetNewAccessToken;
