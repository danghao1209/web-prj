import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SliderImg() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            <div className="flex justify-center items-center">
                <img
                    src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_story_1.jpg?1675329140775"
                    alt="slider"
                />
            </div>
            <div className="flex justify-center items-center">
                <img
                    src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_story_2.jpg?1675329140775"
                    alt="slider"
                />
            </div>
        </Slider>
    );
}

export default SliderImg;
