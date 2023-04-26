import DefaultLayerAccount from '../DefaultLayerAccount';
import Button from '~/components/Button';
import Modal from './Modal';
import { useState } from 'react';

function Addresses() {
    const addresses = [];
    const [isShow, setIsShow] = useState(true);
    const handleShow = () => {
        setIsShow(true);
    };
    const handleClose = () => {
        setIsShow(false);
    };
    return (
        <DefaultLayerAccount>
            <div>
                <div className="uppercase text-[19px] mt-[10px] mb-[27px] text-[#212B25] font-normal">
                    Địa Chỉ Của Bạn
                </div>
                {addresses.length > 0 ? (
                    ''
                ) : (
                    <Button
                        className="bg-[#1c1c1c] font-medium px-[28px] h-[40px] text-[#fff] text-[12px] uppercase border-0 outline-0 transition-all hover:bg-[#fff] hover:text-[#1c1c1c] hover:border hover:border-[#1c1c1c] duration-450 ease-cubic"
                        onClick={handleShow}
                    >
                        Thêm Địa Chỉ
                    </Button>
                )}
                <div class="relative">
                    <Modal isShow={isShow} setIsShow={setIsShow} handleShow={handleShow} handleClose={handleClose} />
                </div>
            </div>
        </DefaultLayerAccount>
    );
}

export default Addresses;
