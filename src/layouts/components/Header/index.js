import { useState, useRef } from 'react';
import {
    faAngleDown,
    faAngleRight,
    faBagShopping,
    faBars,
    faChevronDown,
    faLocationDot,
    faMagnifyingGlass,
    faPhone,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';

function Header() {
    const ref = useRef();
    const navigate = useNavigate();
    const [valueSearch, setValueSearch] = useState('');
    const [hiddenMenuBar, setHiddenMenuBar] = useState(true);
    const [hiddenMenuPro, setHiddenMenuPro] = useState(true);

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
        <div className="max-w-[100%]">
            <div className="flex flex-col justify-center font-sans font-medium text-sm px-[10px] lg:px-[15px] fixed w-full z-10 top-0 bg-white lg:m-auto border border-[#ebebeb] shadow-sm">
                {/* header1 */}

                <div className="flex justify-between items-center lg:h-[64px] lg:px-[50px] lg:mx-[-15px]">
                    <div className="lg:flex lg:items-center basis-[33.33333333%] ">
                        <div>
                            <div className="lg:hidden flex items-center justify-start">
                                <FontAwesomeIcon
                                    icon={faBars}
                                    onClick={() => {
                                        setHiddenMenuBar(false);
                                    }}
                                />
                                <div className="lg:ml-[5px]">Menu</div>
                            </div>
                        </div>
                        <div
                            className={`${
                                hiddenMenuBar ? 'hidden' : ''
                            } flex flex-col fixed top-0 left-0 w-[300px] h-[100vh] text-[#1c1c1c] bg-[#fff] z-[9999] shadow-none touch-manipulation lg:hidden`}
                        >
                            <Link
                                to={'/'}
                                className="lg:px-[20px] lg:py-[10px] text-left align-top float-none border-b-[1px] border-[rgba(92,92,92,0.1)]"
                                onClick={() => setHiddenMenuBar(true)}
                            >
                                Trang Chủ
                            </Link>
                            <Link
                                className="px-[20px] py-[10px] text-left align-top float-none border-b-[1px] border-[rgba(92,92,92,0.1)]"
                                onClick={() => setHiddenMenuBar(true)}
                            >
                                NEW ARRIVAL
                            </Link>
                            <div className="border-b-[1px] border-[rgba(92,92,92,0.1)]">
                                <div className="flex items-center justify-between">
                                    <Link
                                        to={'/product/all'}
                                        className="px-[20px] py-[10px] text-left align-top float-none "
                                        onClick={() => setHiddenMenuBar(true)}
                                    >
                                        Sản Phẩm
                                    </Link>
                                    <div
                                        className="lg:mr-[10px] p-[5px] text-[10px]"
                                        onClick={() => setHiddenMenuPro(!hiddenMenuPro)}
                                    >
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>
                                <div className={`${hiddenMenuPro ? 'hidden' : ''} mb-[10px]`}>
                                    {MenuItem.map((item, index) => {
                                        return (
                                            <div className="text-[12px] font-normal px-[15px] py-[5px] lg:ml-[30px] border-b-[1px] border-[#f7f7f7]">
                                                <Link to={`/${item.title.toLowerCase()}`}>{item.title}</Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <Link
                                className="px-[20px] py-[10px] text-left align-top float-none border-b-[1px] border-[rgba(92,92,92,0.1)]"
                                onClick={() => setHiddenMenuBar(true)}
                            >
                                ALL SALE
                            </Link>
                            <Link
                                to="/contact"
                                className="px-[20px] py-[10px] text-left align-top float-none border-b-[1px] border-[rgba(92,92,92,0.1)]"
                                onClick={() => setHiddenMenuBar(true)}
                            >
                                Về Chúng Tôi
                            </Link>
                            <Link
                                className="px-[20px] py-[10px] text-left align-top float-none border-b-[1px] border-[rgba(92,92,92,0.1)]"
                                onClick={() => setHiddenMenuBar(true)}
                            >
                                Blog
                            </Link>
                            <Link
                                className="px-[20px] py-[10px] text-left align-top float-none border-b-[1px] border-[rgba(92,92,92,0.1)]"
                                onClick={() => setHiddenMenuBar(true)}
                            >
                                Liên Hệ
                            </Link>
                        </div>
                        <div
                            className={`${
                                hiddenMenuBar ? 'hidden' : ''
                            } fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[rgba(0,0,0,0.55)] opacity-100 lg:hidden`}
                            onClick={() => setHiddenMenuBar(true)}
                        ></div>

                        <div className="hidden lg:flex lg:items-center">
                            <div className="py-5 pr-5 lg:mr-[1.875vw]">
                                <Link to="/contact" className="flex items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-xl lg:mr-1" />
                                    <div className="cursor-pointer " title="ĐỊA CHỈ: VIỆT NAM">
                                        ĐỊA CHỈ: VIỆT NAM
                                    </div>
                                </Link>
                            </div>
                            <div className="py-5 pr-5">
                                <Link to="/contact" className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-xl lg:mr-1" />
                                    <div className="cursor-pointer" title="SĐT: 0904708362">
                                        SĐT: 0904708362
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=" max-w-[33.33333%] pl-[20px] basis-[33.3333%]">
                        <Link to="/">
                            <img
                                src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/logo.png?1685614743610"
                                className="m-auto leading-[23.8px] max-w-[100%]  h-auto "
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center pl-[1.875vw] basis-[33.3333%] justify-end ">
                        <div className="px-[5px]">
                            <Tippy
                                interactive
                                delay={[0, 1000]}
                                offset={[20, 20]}
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div
                                        tabIndex="-1"
                                        {...attrs}
                                        className="w-[220px] h-[50px] lg:w-[250px] lg:h-[62px] p-[10px] border border-solid border-gray-200 flex bg-[#fff]"
                                    >
                                        <input
                                            value={valueSearch}
                                            placeholder="Nhập từ khoá"
                                            className="p-[10px] rounded-l-[4px]  border border-solid border-gray-200 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                        <Button
                                            className="bg-neutral-400 w-[40px]"
                                            onClick={() => {
                                                navigate(valueSearch ? `/search?q=${valueSearch}` : '');
                                            }}
                                        >
                                            <div className="text-[10px] lg:text-[14px]">Tìm kiếm</div>
                                        </Button>
                                    </div>
                                )}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="lg:text-xl" />
                            </Tippy>
                        </div>
                        <div className="py-5 px-[5px] lg:pl-5 lg:ml-[1.875vw]">
                            <Link to="/account" className="flex items-center">
                                <FontAwesomeIcon icon={faUser} className="lg:text-xl mr-1" />
                                <div className="hidden lg:block">TÀI KHOẢN</div>
                            </Link>
                        </div>
                        <div className="px-[5px] py-5 lg:pr-5 lg:ml-[1.875vw]">
                            <Link to="/cart" className="flex items-center">
                                <div className="mr-1 hidden lg:block">GIỎ HÀNG</div>
                                <FontAwesomeIcon icon={faBagShopping} className="lg:text-xl" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* header 2 */}
                <div className=" ">
                    <div className="hidden lg:h-[44pxs] lg:flex lg:text-center lg:m-0 lg:justify-center">
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
                                                        <div className="pt-[5px] font-semibold mb-[10px]">
                                                            {item.title}
                                                        </div>
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
        </div>
    );
}

export default Header;
