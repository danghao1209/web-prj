import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import useDebounce from '~/hooks/useDebounce';

function ProInCart({ data }) {
    const [quantity, setQuantity] = useState(1);
    const debouncedValue = useDebounce(quantity, 500);
    return (
        <div className="py-[15px] flex justify-center items-center border-t border-[#f5f5f5]">
            <div className="w-[25%] pr-[15px]">
                <Link>
                    <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/414/728/products/ao-5-fa84a017-eb4b-4997-902f-fac7cb10b70e.jpg"
                        alt=""
                        className="max-h-[180px] max-w-auto h-auto"
                    />
                </Link>
            </div>
            <div className="w-[75%] flex items-center">
                <div className="px-[15px] w-[350px]">
                    <div className="text-[#242424] text-[14px] font-medium mb-[7px]">
                        <Link to={''} className="flex">
                            {/* rendersize và màu ở đây */}
                            <div>Poppy Flower Baby Tee - </div>
                            <div className="flex items-center">
                                <div
                                    className={`w-[15px] h-[15px] ml-[3px] mr-[5px] bg-[#ccc] border border-[#e5e5e5]`}
                                ></div>{' '}
                                / S
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Button className="text-[#dc4e3f] text-[13px] ">Xoá</Button>
                    </div>
                </div>
                <div className="pr-[10px] w-[110px]">
                    <div className="text-[#dc4e3f] text-[16px] font-medium mb-[5px]">299.000₫</div>
                </div>
                <div className="px-[15px] w-[120px] float-right flex justify-end items-center">
                    <div className="flex text-[14px] justify-center items-center">
                        <Button
                            className="w-[28px] px-[9px] py-[3px] text-[#999] border border-[#e5e5e5] rounded-l-[3px] "
                            onClick={() => {
                                if (quantity >= 2) {
                                    setQuantity(quantity - 1);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <input
                            className="w-[35px] min-h-[29px] px-[5px] border border-[#e5e5e5] text-center outline-0 cursor-default"
                            value={quantity}
                        />
                        <Button
                            className="w-[28px] px-[9px] py-[3px] text-[#999] border border-[#e5e5e5] rounded-r-[3px]"
                            onClick={() => {
                                setQuantity(quantity + 1);
                                if (quantity >= 999) setQuantity(999);
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProInCart;
