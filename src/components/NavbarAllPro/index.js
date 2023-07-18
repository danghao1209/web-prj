import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import DropDown from '~/pages/Product/DropDown';

function NavbarAllPro() {
    const contents = [
        {
            title: 'TOP',
            link: '/top',
            children: [
                { title: 'T-Shirt', link: '/t-shirt' },
                { title: 'Shirt & Polo', link: '/shirt' },
                { title: 'Hoodie & Sweatshirt', link: '/hoodie' },
                { title: 'Jacket', link: '/jacket' },
            ],
        },
        {
            title: 'BOTTOM',
            link: '/bottom',
            children: [
                { title: 'Pants', link: '/pants' },
                { title: 'Shorts', link: '/shorts' },
            ],
        },
        {
            title: 'ACCESSORY',
            link: '/accessory',
            children: [
                { title: 'Bag & Backpack', link: '/bag' },
                { title: 'Hat', link: '/hat' },
                { title: 'Others', link: '/others' },
            ],
        },
    ];
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="mt-[105px] mb-[15px] px-[15px] flex justify-between items-center leading-[30px] tracking-[0.25px]">
            <Tippy
                interactive
                placement="bottom-start"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className="w-[200px] bg-[#fff] opacity-100 text-[12px]">
                        <Link to="/product/all">
                            <div>Tất cả</div>
                        </Link>
                        {contents.map((content, index) => {
                            return <DropDown key={index++} content={content} />;
                        })}
                    </div>
                )}
            >
                <div
                    className="mb-[10px] flex items-center uppercase text-[16px] font-medium"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Danh Mục
                    <FontAwesomeIcon icon={isHovered ? faChevronUp : faChevronDown} className="text-[12px] ml-[5px]" />
                </div>
            </Tippy>
            <div
                className="mb-[10px] flex items-center uppercase text-[16px] font-medium"
                onClick={() => {
                    setIsClicked(!isClicked);
                }}
            >
                Tìm Theo <FontAwesomeIcon icon={isClicked ? faMinus : faPlus} className="text-[12px] ml-[5px]" />
            </div>
        </div>
    );
}

export default NavbarAllPro;
