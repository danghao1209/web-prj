import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderProPhone({ images = [], path = '' }) {
    var settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {images?.map((image, index) => (
                <div className="px-[5px] flex flex-col relative w-full">
                    <div className="flex flex-col relative">
                        <img src={`${path}${image}`} alt="" />
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SliderProPhone;
