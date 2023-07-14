import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Product from '~/pages/AllProduct/Product'; // để sau dùng render ra các sản phẩm

function IfLikeSlickPhone() {
    var settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
    };
    return (
        <Slider {...settings}>
            <div className="px-[15px] flex flex-col">
                <div className="flex flex-col items-center justify-center">
                    <div className="">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="mt-[20px] mb-[5px] text-[12px] text-ellipsis font-utm_aptima ">
                            CLOWNZ BASIC SWEAT PANTS
                        </div>
                        <div className="text-[14px]">PANTS & JEANS</div>
                        <div className="text-[12px]">399.000₫</div>
                    </div>
                </div>
            </div>
            <div className="px-[15px] flex flex-col">
                <div className="flex flex-col">
                    <div className="">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="mt-[20px] mb-[5px] text-[12px] text-ellipsis font-utm_aptima ">
                            CLOWNZ BASIC SWEAT PANTS
                        </div>
                        <div className="text-[14px]">PANTS & JEANS</div>
                        <div className="text-[12px]">399.000₫</div>
                    </div>
                </div>
            </div>{' '}
            <div className="px-[15px] flex flex-col">
                <div className="flex flex-col">
                    <div className="">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="mt-[20px] mb-[5px] text-[12px] text-ellipsis font-utm_aptima ">
                            CLOWNZ BASIC SWEAT PANTS
                        </div>
                        <div className="text-[14px]">PANTS & JEANS</div>
                        <div className="text-[12px]">399.000₫</div>
                    </div>
                </div>
            </div>{' '}
            <div className="px-[15px] flex flex-col">
                <div className="flex flex-col">
                    <div className="">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="mt-[20px] mb-[5px] text-[12px] text-ellipsis font-utm_aptima ">
                            CLOWNZ BASIC SWEAT PANTS
                        </div>
                        <div className="text-[14px]">PANTS & JEANS</div>
                        <div className="text-[12px]">399.000₫</div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default IfLikeSlickPhone;
