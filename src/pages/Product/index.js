import _ from 'lodash';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ToastMessage, { success, warning } from '~/components/Toast';

import Button from '~/components/Button';
import { setLoading, setProductData, setIndexColor, setSize, fetchDataAddCart } from '~/features/productSlice';
import DropDown from './DropDown';
import ItemProduct from './ItemProduct';
import IfLikeSlick from './IfLikeSlick';
import check from '~/asset/images/select-pro.png';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import IfLikeSlickPhone from './IfLikeSlickPhone';

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
    const { dataProAll } = useSelector((state) => state.productsAll);
    const { productData, indexColor, size, isLoading } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const path = 'http://localhost:1209/';
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        try {
            if (dataProAll.products?.length > 0) {
                dispatch(setLoading(true));
                const product = _.find(dataProAll.products, { _id: id });
                console.log(product);
                if (product) {
                    dispatch(setProductData(product));
                    dispatch(setLoading(false));
                } else {
                    throw new Error('Loi');
                }
            } else {
                dispatch(setLoading(true));
                (async () => {
                    const result = await axios.get(`${path}api/product/${id}`);
                    if (result.status === 200) {
                        dispatch(setProductData(result.data));
                    } else {
                        console.log('lỗi');
                    }
                })();
                dispatch(setLoading(false));
            }
        } catch (error) {
            console.log('lỗi fecth');
        } finally {
            dispatch(setLoading(false));
        }
    }, []);

    let discount = (price, perDiscount) => {
        return (price * perDiscount) / 100;
    };

    let priceLast = (price, perDiscount) => {
        let priceAfter = (price * perDiscount) / 100;
        return price - priceAfter;
    };

    const addToCart = () => {
        const tokenACCESS = localStorage.getItem('tokenACCESS');
        const tokenREFRESH = localStorage.getItem('tokenREFRESH');

        if (!tokenREFRESH) {
            navigate('/login', { replace: true });
            return;
        }
        (async () => {
            try {
                dispatch(fetchDataAddCart(tokenACCESS));
                success('Thêm vào giỏ hàng thành công');
                setTimeout(() => navigate('/cart', { replace: true }), 3000);
            } catch (error) {
                try {
                    const newTokenAccess = await GetNewAccessToken();
                    dispatch(fetchDataAddCart(newTokenAccess));
                    success('Thêm vào giỏ hàng thành công');
                    setTimeout(() => navigate('/cart', { replace: true }), 3000);
                } catch (err) {
                    warning('Thêm vào giỏ hàng thất bại!');
                    localStorage.removeItem('tokenACCESS');
                    localStorage.removeItem('tokenREFRESH');

                    navigate('/login', { replace: true });
                }
            }
        })();
    };

    const sizeChecked = ' border border-gray-900';
    const sizeSoldOut =
        'before:bg-[#aeaeae] before:w-[100%] before:h-[1px] before:absolute before:transform before:rotate-45 before:bottom-[50%] after:w-[100%] after:h-[1px] after:bg-[#aeaeae] after:absolute after:transform after:rotate-[-45deg] after:bottom-[50%]';

    if (isLoading) {
        return (
            <div className="px-[50px] mx-[-15px]">
                <div className="flex items-center justify-center">
                    <CircularProgress color="inherit" />
                </div>
            </div>
        );
    }
    return (
        <div className="lg:mt-[105px] lg:pt-[50px] w-full">
            <div className="lg:px-[50px] lg:flex pb-[10px] justify-center">
                {/* container trên */}
                <div className="hidden lg:flex lg:mx-[-15px] lg:pb-[10px] w-[18%]">
                    <div className="lg:px-[15px] text-[1.07143em] sticky top-0 w-[100%]">
                        {contents.map((content, index) => {
                            return <DropDown key={index++} content={content} />;
                        })}
                    </div>
                </div>

                <div className="w-full lg:w-[82%] lg:flex lg:px-[15px] justify-center lg:justify-start ">
                    <div className="w-full lg:w-[67%] lg:px-[15px]">
                        <ItemProduct data={productData} indexColor={indexColor} path={path} />
                    </div>
                    {/* {phần info} */}
                    <div className="px-[-15px] lg:w-[33%]">
                        <div className="">
                            <div className="px-[15px]">
                                <div className="flex items-center justify-center lg:justify-start lg:mb-[5px] lg:mt-[0px] text-[25px] text-[#707070] font-medium">
                                    {productData ? productData.title : ''}
                                </div>

                                <div className="border-t border-b  border-dashed border-gray-300 py-[10px] mb-[10px]">
                                    <div className="flex items-center flex-row-reverse justify-center lg:flex-row lg:justify-start">
                                        <div className="tracking-[0.25px] font-bold text-[18px]">
                                            {productData
                                                ? priceLast(productData.price, productData.discountPercentage)
                                                : ''}
                                            ₫
                                        </div>
                                        <div className="lg:hidden flex items-center justify-center">
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="text-[12px] mx-[5px] font-light"
                                            />
                                        </div>
                                        <div className="tracking-[0.25px] text-[19px] line-through ml-[10px]">
                                            {productData ? productData.price : '0'}₫
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex">
                                            Tiết kiệm:{' '}
                                            <div className="text-[#dc4e3f] font-medium">
                                                {productData
                                                    ? discount(productData.price, productData.discountPercentage)
                                                    : ''}
                                                ₫
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
                                            {productData ? (
                                                productData.data.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`mb-[5px] mr-[5px] w-[80px] h-[100px] p-[2px] overflow-auto relative bg-transparent  ${
                                                                indexColor === index ? 'border border-gray-900' : ''
                                                            }`}
                                                            onClick={() => {
                                                                dispatch(setIndexColor(index));
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
                                            {productData
                                                ? Object.keys(productData.data[indexColor].size).map((item, index) => {
                                                      return (
                                                          <div
                                                              className={`w-[50px] h-[50px] mb-[5px] mr-[5px] relative border border-[#f5f5f5] ${
                                                                  productData.data[indexColor].size[item] > 0
                                                                      ? ''
                                                                      : sizeSoldOut
                                                              }`}
                                                              onClick={() => {
                                                                  if (productData.data[indexColor].size[item] > 0) {
                                                                      dispatch(setSize(item));
                                                                  }
                                                              }}
                                                          >
                                                              <div
                                                                  className={`w-full h-full px-[5px] flex justify-center items-center font-semibold ${
                                                                      productData.data[indexColor].size[item] > 0 &&
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
                                            onClick={() => {
                                                addToCart();
                                            }}
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
                                    <div className="mb-[20px] text-[#707070] font-bold w">Mô tả</div>

                                    {/* dùng map render ra mô tả */}

                                    {productData
                                        ? productData.description.map((item, index) => {
                                              return (
                                                  <div className="text-[#3d3d3d] mb-[10px] font-semibold">
                                                      <div className="">{item}</div>
                                                  </div>
                                              );
                                          })
                                        : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* container dưới */}
            {/* phần có thể b cũng thích */}
            <div className="mt-[20px] mx-[-15px] mb-[10px] max-w-full">
                <div className="mb-[50px] flex text-center justify-center items-center">
                    <div className="uppercase text-[26px] text-[#1c1c1c] leading-[28px] tracking-[2.4px] relative before:absolute before:w-[50px] before:left-[50%] before:bottom-[-15px] before:h-[2px] before:bg-[#000] before:ml-[-25px]">
                        Có thể bạn cũng thích
                    </div>
                </div>
                <div className="hidden lg:block px-[50px] max-w-full">
                    <IfLikeSlick />
                </div>
                <div className="lg:hidden max-w-full mx-auto">
                    <IfLikeSlickPhone />
                </div>
            </div>
            {/* hotline */}
            <div className="py-[23px] bg-[#F3F3F3] rounded-[5px]">
                <div className="flex items-center ml-[10px] lg:text-[16px]">
                    <FontAwesomeIcon icon={faPhoneSquare} className="text-[30px] mr-[5px]" />
                    <div className="uppercase flex">
                        Hotline đặt hàng: <div className="text-[#FF0000]">09047 08362</div>
                    </div>
                </div>
            </div>
            <ToastMessage />
        </div>
    );
}

export default Product;
