import { Link } from 'react-router-dom';
import DefaultLayerAccount from '../DefaultLayerAccount';

function ProfilePage() {
    return (
        <DefaultLayerAccount>
            <div>
                <div className="uppercase text-[19px] mt-[10px] mb-[27px] text-[#212B25] font-normal">
                    Thông Tin Tài Khoản
                </div>
                {/* sau này sử dụng vòng lặp với api */}
                <div>
                    <div className="flex text-[14px] mb-[15px]">
                        <strong className="mr-[5px]">Họ tên: </strong>
                        <div>Đăng Hào</div>
                    </div>
                    <div className="flex text-[14px] mb-[15px]">
                        <strong className="mr-[5px]">Email: </strong>
                        <div>danghao1209@gmail.com</div>
                    </div>
                </div>
            </div>
        </DefaultLayerAccount>
    );
}

export default ProfilePage;
