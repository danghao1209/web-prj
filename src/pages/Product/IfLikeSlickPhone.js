import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pathApi } from '~/asset/path';

function IfLikeSlickPhone({ data }) {
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
            {data
                ? data.map((item, index) => {
                      return (
                          <div className="px-[15px] flex flex-col z-2">
                              <div className="flex flex-col items-center justify-center">
                                  <div className="">
                                      <img src={`${pathApi}/public/${item?.thumbnail[0]}`} alt="" />
                                  </div>
                                  <div>
                                      <div className="mt-[20px] mb-[5px] text-[12px] text-ellipsis font-utm_aptima truncate">
                                          {item?.title}
                                      </div>
                                      <div className="text-[14px]">{item?.category}</div>
                                      <div className="text-[12px]">
                                          {' '}
                                          {item?.price - Math.round((item?.price * item?.discountPercentage) / 100)}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : ''}
        </Slider>
    );
}

export default IfLikeSlickPhone;
