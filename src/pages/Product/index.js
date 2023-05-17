import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

import DropDown from './DropDown';
import ItemProduct from './ItemProduct';
import IfLikeSlick from './IfLikeSlick';
import Button from '~/components/Button';
import check from '~/asset/imgs/select-pro.png';

function Product() {
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

    const [data, setData] = useState();
    const [indexColor, setIndexColor] = useState(0);
    const [size, setSize] = useState();

    useEffect(() => {
        const currentUrl = window.location.href;
        const productId = currentUrl.split('/').pop();
        try {
            const fetchData = async () => {
                const result = await axios.get(`${path}api/product/${productId}`);
                if (result.status === 200) {
                    setData(result.data);
                } else {
                    console.log('lỗi');
                }
            };
            fetchData();
        } catch (error) {
            console.log('lỗi fecth');
        }
    }, []);
    let discount = (price, perDiscount) => {
        return (price * perDiscount) / 100;
    };

    let priceLast = (price, perDiscount) => {
        let priceAfter = (price * perDiscount) / 100;
        return price - priceAfter;
    };
    const sizeChecked = ' border border-gray-900';
    const sizeSoldOut =
        'before:bg-[#aeaeae] before:w-[100%] before:h-[1px] before:absolute before:transform before:rotate-45 before:bottom-[50%] after:w-[100%] after:h-[1px] after:bg-[#aeaeae] after:absolute after:transform after:rotate-[-45deg] after:bottom-[50%]';
    return (
        <div className="mt-[105px] pt-[50px] w-full px-[50px]">
            <div className="px-[50px] flex pb-[10px]">
                {/* container trên */}
                <div className="mx-[-15px] pb-[10px] flex w-[18%]">
                    <div className="px-[15px] text-[1.07143em] sticky top-0 w-[100%]">
                        {contents.map((content, index) => {
                            return <DropDown key={index++} content={content} />;
                        })}
                    </div>
                </div>

                <div className="w-[82%] flex px-[15px]">
                    <div className="w-[67%] px-[15px]">
                        <ItemProduct data={data} indexColor={indexColor} path={path} />
                    </div>
                    {/* {phần info} */}
                    <div className="px-[-15px] w-[33%]">
                        <div className="">
                            <div className="px-[15px]">
                                <div className="mb-[5px] mt-[0px] text-[25px] text-[#707070] font-medium">
                                    {data ? data.title : ''}
                                </div>

                                <div className="border-t border-b  border-dashed border-gray-300 py-[10px] mb-[10px]">
                                    <div className="flex items-center">
                                        <div className="tracking-[0.25px] font-bold text-[18px]">
                                            {data ? priceLast(data.price, data.discountPercentage) : ''}₫
                                        </div>
                                        <div className="tracking-[0.25px] text-[14px] line-through ml-[10px]">
                                            {data ? data.price : '0'}₫
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex">
                                            Tiết kiệm:{' '}
                                            <div className="text-[#dc4e3f] font-medium">
                                                {data ? discount(data.price, data.discountPercentage) : ''}₫
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-[15px]">
                                    <div>
                                        <div className="font-bold text-[#1c1c1c] w-full tracking-[0.5px] my-[2px]">
                                            Màu sắc:{' '}
                                        </div>
                                        <div className="flex">
                                            {data ? (
                                                data.data.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`mb-[5px] mr-[5px] w-[80px] h-[100px] p-[2px] overflow-auto relative bg-transparent  ${
                                                                indexColor === index ? 'border border-gray-900' : ''
                                                            }`}
                                                            onClick={() => {
                                                                setIndexColor(index);
                                                            }}
                                                        >
                                                            <img src={`${path}${item.images[0]}`} alt="" />

                                                            <div
                                                                className={`${
                                                                    indexColor === index ? '' : 'hidden'
                                                                } absolute bottom-0 right-0 `}
                                                            >
                                                                <img src={check} alt="" />
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-[15px]">
                                    <div>
                                        <div className="font-bold text-[#1c1c1c] w-full tracking-[0.5px] my-[2px] ">
                                            Size:{' '}
                                        </div>
                                        <div className="flex">
                                            {data
                                                ? Object.keys(data.data[indexColor].size).map((item, index) => {
                                                      return (
                                                          <div
                                                              className={`w-[50px] h-[50px] mb-[5px] mr-[5px] relative border border-[#f5f5f5] ${
                                                                  data.data[indexColor].size[item] > 0
                                                                      ? ''
                                                                      : sizeSoldOut
                                                              }`}
                                                              onClick={() => {
                                                                  if (data.data[indexColor].size[item] > 0) {
                                                                      setSize(item);
                                                                  }
                                                              }}
                                                          >
                                                              <div
                                                                  className={`w-full h-full px-[5px] flex justify-center items-center font-semibold ${
                                                                      data.data[indexColor].size[item] > 0 &&
                                                                      item === size
                                                                          ? sizeChecked
                                                                          : ''
                                                                  }`}
                                                              >
                                                                  {item}
                                                              </div>
                                                          </div>
                                                      );
                                                  })
                                                : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-[15px] w-full">
                                    <div>
                                        <Button
                                            className={` text-[#000] text-[16px] font-bold h-[50px] w-full bg-[#19ff3b] uppercase shadow-none hover:text-[#fff] hover:bg-[#dc4e3f]`}
                                            disabled={size ? false : true}
                                        >
                                            THÊM VÀO GIỎ
                                        </Button>
                                    </div>
                                </div>
                                <div className="mb-[15px]">
                                    <img
                                        className="w-[full]"
                                        src="//bizweb.dktcdn.net/100/414/728/files/t-shirt-01-e0a4e8c2-cda0-4952-8be2-71921763a342.jpg?v=1635851197808"
                                        alt=""
                                    />
                                </div>
                                <div className="mb-[20px] text-[16px]">
                                    <div className="mb-[20px] text-[#707070] font-bold">Mô tả</div>

                                    {/* dùng map render ra mô tả */}

                                    <div className="text-[#3d3d3d]">
                                        <div>Chất liệu: 100% cotton</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* container dưới */}
            {/* phần có thể b cũng thích */}
            <div className="mt-[20px] mx-[-15px] mb-[10px]">
                <div className="mb-[50px] flex text-center justify-center items-center">
                    <div className="uppercase text-[26px] text-[#1c1c1c] leading-[28px] tracking-[2.4px] relative before:absolute before:w-[50px] before:left-[50%] before:bottom-[-15px] before:h-[2px] before:bg-[#000] before:ml-[-25px]">
                        Có thể bạn cũng thích
                    </div>
                </div>
                <div>
                    <IfLikeSlick />
                </div>
            </div>
            {/* hotline */}
            <div className="py-[23px] bg-[#F3F3F3] rounded-[5px]">
                <div className="flex items-center ml-[10px]">
                    <FontAwesomeIcon icon={faPhoneSquare} className="text-[30px] mr-[5px]" />
                    <div className="uppercase flex">
                        Hotline đặt hàng: <div className="text-[#FF0000]">09047 08362</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
