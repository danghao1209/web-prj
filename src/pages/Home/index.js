import { Link } from 'react-router-dom';
import SliderImg from './SliderImg';

function HomePage() {
    return (
        <div>
            <div>
                <div>
                    <img
                        src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_1.jpg?1675329140775"
                        alt=""
                    />
                </div>
            </div>
            <div>
                <div className="flex px-[10px] pt-[20px]">
                    <div className="w-33% px-[10px]">
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/ant_index_banner_1.jpg?1675329140775"
                            alt=""
                        />
                    </div>
                    <div className="w-33% px-[10px]">
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/ant_index_banner_2.jpg?1675329140775"
                            alt=""
                        />
                    </div>
                    <div className="w-33% px-[10px]">
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/ant_index_banner_3.jpg?1675329140775"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="py-[40px]">
                    <SliderImg />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
