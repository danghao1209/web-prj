import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetNewAccessToken = async () => {
    const navigate = useNavigate();
    const tokenREFRESH = localStorage.getItem('tokenREFRESH');

    try {
        const newTokenAccess = await axios.post(
            'http://localhost:2001/api/auth/token',
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
