import { useState, useRef } from 'react';
import {
    faAngleDown,
    faAngleRight,
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
    const ref = useRef();

    const [valueSearch, setValueSearch] = useState('');

    const MenuItem = [
        { title: 'TOP', children: ['T-Shirt', 'Shirt & Polo', 'Hoodie & Sweatshirt', 'Jacket'] },
        { title: 'BOTTOM', children: ['Pants', 'Shorts', 'Hoodie & Sweatshirt'] },
        { title: 'ACCESSORY', children: ['Bag & Backpack', 'Hat', 'Others'] },
    ];

    const handleChange = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setValueSearch(valueSearch);
        }
    };

    return (
        <div className="font-sans font-medium text-sm px-[15px] fixed w-full z-10 top-0 bg-white">
            {/* header1 */}
            <div className="flex justify-between items-center h-[64px] px-[50px] mx-[-15px]">
                <div className="flex items-center basis-[33.3333%]">
                    <div className="py-5 pr-5 mr-[1.875vw]">
                        <Link to="/contact" className="flex items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="text-xl mr-1" />
                            <div className=" cursor-pointer" title="ĐỊA CHỈ: VIỆT NAM">
                                ĐỊA CHỈ: VIỆT NAM
                            </div>
                        </Link>
                    </div>
                    <div className="py-5 pr-5">
                        <Link to="/contact" className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-xl mr-1" />
                            <div className="cursor-pointer" title="SĐT: 0904708362">
                                SĐT: 0904708362
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex">
                    <Link to="/">
                        <img
                            src="//bizweb.dktcdn.net/100/414/728/themes/867455/assets/logo.png?1675329140775"
                            className="h-9 m-auto leading-[23.8px] basis-[33.3333%]"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center ml-[1.875vw] basis-[33.3333%] justify-end">
                    <div className="">
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
                                    <Button className="bg-neutral-400">
                                        <div>Tìm kiếm</div>
                                    </Button>
                                </div>
                            )}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                        </Tippy>
                    </div>
                    <div className="py-5 pl-5 ml-[1.875vw]">
                        <Link to="/account" className="flex items-center">
                            <FontAwesomeIcon icon={faUser} className="text-xl mr-1" />
                            <div className="">TÀI KHOẢN</div>
                        </Link>
                    </div>
                    <div className="py-5 pr-5 ml-[1.875vw]">
                        <Link to="/cart" className="flex items-center">
                            <div className="mr-1">GIỎ HÀNG</div>
                            <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* header 2 */}
            <div className="items-center ">
                <div className=" h-[44pxs] flex text-center m-0 justify-center">
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
                        offset={[16, 8]}
                        render={(attrs) => (
                            <div
                                tabIndex="-1"
                                {...attrs}
                                className="min-w-[1025px] max-h-[600px] p-[10px] border border-solid border-gray-200 opacity-100 bg-gray-100 bg-opacity-100"
                            >
                                <div className=" flex justify-center mx-auto my-0">
                                    {MenuItem.map((item, index) => {
                                        return (
                                            <div
                                                className="w-[20%] p-[10px] leading-[1.3] flex flex-col text-left"
                                                key={index}
                                            >
                                                <Link to="/top" className="hover:text-red-600">
                                                    <div className="pt-[5px] font-semibold mb-[10px]">{item.title}</div>
                                                </Link>

                                                {item.children.map((child, index) => {
                                                    return (
                                                        <Link to="/t-shirt" className="hover:text-red-600">
                                                            <div className="pt-[5px] font-light">{child}</div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/product/all">
                            <div className="px-[20px] py-[10px] flex items-center">
                                <div className="mr-[2px]">SẢN PHẨM</div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </Link>
                    </Tippy>

                    <Tippy
                        interactive
                        delay={[[50, 200]]}
                        placement="bottom-start"
                        offset={[5, 5]}
                        render={(attrs) => (
                            <div
                                tabIndex="-1"
                                {...attrs}
                                className="w-[220px] shadow-sm border-b-[1px] border-gray-200 opacity-100 bg-gray-100 bg-opacity-100"
                            >
                                {MenuItem.map((item, index) => {
                                    return (
                                        <div ref={ref} key={index}>
                                            <Tippy
                                                interactive
                                                placement="right-start"
                                                offset={[0, 0]}
                                                render={(attrs) => (
                                                    <div key={index}>
                                                        {item.children.map((child, index) => {
                                                            return (
                                                                <Link
                                                                    key={index}
                                                                    to="/t-shirt"
                                                                    className="hover:text-red-600"
                                                                >
                                                                    <div
                                                                        tabIndex="-1"
                                                                        {...attrs}
                                                                        className="w-[220px] p-[10px] shadow-sm border-b-[1px] border-gray-200 opacity-100 bg-gray-100 bg-opacity-60 text-left"
                                                                    >
                                                                        {child}
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            >
                                                <Link key={index} to="/top" className="hover:text-red-600">
                                                    <div className="flex justify-between mx-auto my-0 text-left items-center py-[10px] pl-[5px] pr-[20px]">
                                                        <div>{item.title}</div>
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </Link>
                                            </Tippy>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    >
                        <Link>
                            <div className="px-[20px] py-[10px] flex items-center">
                                <div className="mr-[2px]">NEW ARRIVAL</div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </Link>
                    </Tippy>
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
