import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Product from './Product';
import DropDown from '~/pages/Product/DropDown';
import { Link } from 'react-router-dom';

function ProductPage() {
    const [dataPro, setDataPro] = useState({ products: [] });
    const [hoverList, setHoverList] = useState(false);
    const [onClickFind, setOnClickFind] = useState(false);

    const contents = [
        {
            title: 'TOP',
            link: '/top',
            children: [
                { title: 'T-Shirt', link: '/t-shirt' },
                { title: 'Shirt & Polo', link: '/shirt&polo' },
                { title: 'Hoodie & Sweatshirt', link: '/hoodie&sweatshirt' },
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
                { title: 'Bag & Backpack', link: '/bag&backpack' },
                { title: 'Hat', link: '/hat' },
                { title: 'Others', link: '/others' },
            ],
        },
    ];

    const path = 'http://localhost:1209/';

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await axios.get(`${path}api/product/all`);
                if (result.status === 200) {
                    setDataPro(result.data);
                } else {
                    console.log('lỗi');
                }
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="px-[50px] mx-[-15px]">
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
                    <div className="mb-[10px] flex items-center uppercase text-[16px] font-medium">
                        Danh Mục
                        <FontAwesomeIcon
                            icon={hoverList ? faChevronUp : faChevronDown}
                            className="text-[12px] ml-[5px]"
                        />
                    </div>
                </Tippy>

                <div className="mb-[10px] flex items-center uppercase text-[16px] font-medium">
                    Tìm Theo <FontAwesomeIcon icon={onClickFind ? faMinus : faPlus} className="text-[12px] ml-[5px]" />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-y-[50px]">
                {dataPro.length !== 0 ? (
                    dataPro.products.map((product) => {
                        return <Product product={product} path={path} />;
                    })
                ) : (
                    <div>Chưa có sản phẩm nào.</div>
                )}

                <div className="px-[15px] flex flex-col relative">
                    {false ? (
                        <div className="flex flex-col">
                            <div className="">
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                                    alt=""
                                />
                                <div className="w-[15px] h-[15px] bg-[#111827]"></div>
                            </div>

                            <div class="absolute bottom-0 w-[calc(100%-30px)]">
                                <div className="h-[46px] px-[10px] border-[1px] border-black flex items-center justify-center ">
                                    <div className="font-medium text-[13px]">Chi Tiết</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col relative">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                                alt=""
                            />
                            <div className="absolute bottom-[120px] right-[10px] flex">
                                <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                                <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                            </div>
                            <div>
                                <div className="mt-[20px] mb-[5px] text-[20px] text-ellipsis font-utm_aptima ">
                                    CLOWNZ BASIC SWEAT PANTS
                                </div>
                                <div className="text-[16px]">PANTS & JEANS</div>
                                <div className="font-medium">399.000₫</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
