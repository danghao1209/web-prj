import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Product from '~/pages/AllProduct/Product'; // để sau dùng render ra các sản phẩm

function IfLikeSlick() {
    var settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
    };
    return (
        <Slider {...settings}></Slider>
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
        </Slider>
    );
}

export default IfLikeSlick;
