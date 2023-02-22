import { useState } from 'react';
import {
    faAngleDown,
    faBagShopping,
    faLocationDot,
    faMagnifyingGlass,
    faPhone,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';

function Header() {
    const [valueSearch, setValueSearch] = useState('');

    const handleChange = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setValueSearch(valueSearch);
        }
    };
    return (
        <div className="font-sans font-medium text-sm px-[15px]">
            {/* header1 */}
            <div className="flex justify-between items-center h-16 px-12">
                <div className="flex items-center ">
                    <div className="flex items-center py-5 pr-5 mr-[1.875vw]">
                        <FontAwesomeIcon icon={faLocationDot} className="text-xl mr-1" />
                        <Link to="/contact">
                            <div className=" cursor-pointer" title="ĐỊA CHỈ: VIỆT NAM">
                                ĐỊA CHỈ: VIỆT NAM
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center py-5 pr-5">
                        <FontAwesomeIcon icon={faPhone} className="text-xl mr-1" />
                        <Link to="/contact">
                            <div className="cursor-pointer" title="SĐT: 0904708362">
                                SĐT: 0904708362
                            </div>
                        </Link>
                    </div>
                </div>

                <div>
                    <Link to="/">
                        <img
                            src="//bizweb.dktcdn.net/100/414/728/themes/867455/assets/logo.png?1675329140775"
                            className="w-80 h-9"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center ml-[1.875vw]">
                    <div>
                        <Tippy
                            interactive
                            delay={[0, 1000]}
                            offset={[20, 20]}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div
                                    tabIndex="-1"
                                    {...attrs}
                                    className="w-[250px] h-[62px] p-[10px] border border-solid border-gray-200 flex"
                                >
                                    <input
                                        value={valueSearch}
                                        placeholder="Nhập từ khoá"
                                        className="p-[10px] rounded-l-[4px]  border border-solid border-gray-200"
                                        onChange={handleChange}
                                    />
                                    <Button>
                                        <div>Tìm kiếm</div>
                                    </Button>
                                </div>
                            )}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                        </Tippy>
                    </div>
                    <div className="flex items-center py-5 pl-5 ml-[1.875vw]">
                        <FontAwesomeIcon icon={faUser} className="text-xl mr-1" />
                        <Link to="/member/profile/:id">
                            <div className="">TÀI KHOẢN</div>
                        </Link>
                    </div>
                    <div className="flex items-center ml-5 py-5 pr-5 ml-[1.875vw]">
                        <Link to="/cart">
                            <div className="mr-1">GIỎ HÀNG</div>
                        </Link>
                        <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
                    </div>
                </div>
            </div>
            {/* header 2 */}
            <div className="items-center ">
                <div className="w-[1811px] h-[44pxs] flex text-center m-0 justify-center">
                    <Link to="/">
                        <div className="px-[20px] py-[10px]">TRANG CHỦ</div>
                    </Link>
                    <Link to="/contact">
                        <div className="px-[20px] py-[10px]">VỀ CHÚNG TÔI</div>
                    </Link>
                    <Link>
                        <div className="px-[20px] py-[10px]">ALL SALE</div>
                    </Link>

                    <Tippy
                        interactive
                        placement="bottom"
                        delay={[50, 700]}
                        offset={[16, 8]}
                        render={(attrs) => (
                            <div
                                tabIndex="-1"
                                {...attrs}
                                className="min-w-[1025px] max-h-[600px] w-[1791px] p-[10px] border border-solid border-gray-200 opacity-100 bg-gray-100 bg-opacity-60"
                            >
                                <div className="w-[1300px] flex justify-center mx-auto my-0">
                                    <div className="w-[20%] p-[10px] leading-[1.3] flex flex-col text-left">
                                        <Link to="/top">
                                            <div className="pt-[5px] font-semibold mb-[10px]">TOP</div>
                                        </Link>

                                        <Link to="/t-shirt">
                                            <div className="pt-[5px] font-light">T-Shirt</div>
                                        </Link>

                                        <Link to="/shirt">
                                            <div className="pt-[5px] font-light">Shirt & Polo</div>
                                        </Link>

                                        <Link to="/hoodie">
                                            <div className="pt-[5px] font-light">Hoodie & Sweatshirt</div>
                                        </Link>

                                        <Link to="/jacket">
                                            <div className="pt-[5px] font-light">Jacket</div>
                                        </Link>
                                    </div>

                                    <div className="w-[20%] p-[10px] leading-[1.3] flex flex-col text-left">
                                        <Link to="/top">
                                            <div className="pt-[5px] font-semibold mb-[10px]">BOTTOM</div>
                                        </Link>

                                        <Link to="/hoodie">
                                            <div className="pt-[5px] font-light">Pants</div>
                                        </Link>

                                        <Link to="/jacket">
                                            <div className="pt-[5px] font-light">Shorts</div>
                                        </Link>
                                    </div>

                                    <div className="w-[20%] p-[10px] leading-[1.3] flex flex-col text-left">
                                        <Link to="/top">
                                            <div className="pt-[5px] font-semibold mb-[10px]">ACCESSORY</div>
                                        </Link>

                                        <Link to="/t-shirt">
                                            <div className="pt-[5px] font-light">Bag & Backpack</div>
                                        </Link>

                                        <Link to="/shirt">
                                            <div className="pt-[5px] font-light">Hat</div>
                                        </Link>

                                        <Link to="/hoodie">
                                            <div className="pt-[5px] font-light">Others</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <Link>
                            <div className="px-[20px] py-[10px] flex items-center">
                                <div className="mr-[2px]">SẢN PHẨM</div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </Link>
                    </Tippy>

                    <Link>
                        <div className="px-[20px] py-[10px] flex items-center">
                            <div className="mr-[2px]">NEW ARRIVAL</div>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </Link>
                    <Link>
                        <div className="px-[20px] py-[10px]">BST THU ĐÔNG</div>
                    </Link>
                    <Link to="/contact">
                        <div className="px-[20px] py-[10px]">LIÊN HỆ</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
