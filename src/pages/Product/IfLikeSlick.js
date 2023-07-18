import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pathApi } from '~/asset/path';

function IfLikeSlick({ data }) {
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
        <Slider {...settings}>
            {data
                ? data.map((item, index) => {
                      return (
                          <div className="px-[15px] flex flex-col relative">
                              <div className="flex flex-col relative">
                                  <img src={`${pathApi}/public/${item?.thumbnail[0]}`} alt="" />
                                  <div className="absolute bottom-[120px] right-[10px] flex">
                                      <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                                      <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                                  </div>
                                  <div>
                                      <div className="mt-[20px] mb-[5px] text-[20px] text-ellipsis font-utm_aptima truncate">
                                          {item?.title}
                                      </div>
                                      <div className="text-[16px]">{item?.category}</div>
                                      <div className="font-medium">
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

export default IfLikeSlick;
