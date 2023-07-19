import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Button from '~/components/Button';

function ContactPage() {
    const containerStyle = {
        width: '800px',
        height: '900px',
    };

    const center = {
        lat: 20.983558,
        lng: 105.800335,
    };

    const position = {
        lat: 20.983558,
        lng: 105.800335,
    };
    return (
        <div className="lg:flex lg:w-[60%] mx-auto lg:mt-[105px]">
            <div className="flex justify-start items-center h-screen border-r lg:w-[60%] px-[20px]">
                <LoadScript googleMapsApiKey="AIzaSyD203TzjZVvkjN2VIb1hGOtPD3pClPGQgY">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
                        <Marker position={position} />
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-[40%] mt-[100px] lg:mt-0">
                <div className="text-[16px]">
                    <div className="font-bold uppercase mb-[20px]">Công ty 1 thành viên DahaClown</div>
                    <div className="flex mb-[20px]">
                        Điện thoại: <div className="font-bold ml-[5px]">09047 08362</div>
                    </div>
                    <div className="flex mb-[20px]">
                        Email:<div className="font-bold ml-[5px]">Danghao1209@gmail.com</div>
                    </div>
                    <div className="flex mb-[20px]">
                        Giờ mở cửa: <div className="font-bold ml-[5px]">Mon - Sun | 09:30 ~ 21:30</div>
                    </div>
                </div>
                <div className="mt-[30px] flex flex-col text-[16px] lg:ml-[40px]">
                    <div className="font-bold uppercase mb-[20px]">Gửi một lời nhắn cho chúng tôi</div>
                    <div className="font-bold uppercase mb-[20px]">
                        <input
                            type="text"
                            placeholder="Họ tên"
                            className="py-[10px] px-[10px] w-full focus:outline-none border-b"
                        />
                    </div>
                    <div className="font-bold uppercase mb-[20px]">
                        <input
                            type="text"
                            placeholder="Email"
                            className="py-[10px] px-[10px] w-[60%] focus:outline-none border-b"
                        />
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="py-[10px] px-[10px] w-[40%] focus:outline-none border-b"
                        />
                    </div>
                    <div className="font-bold uppercase mb-[20px]">
                        <input
                            type="text"
                            placeholder="Lời nhắn"
                            className="py-[10px] px-[10px]  w-full focus:outline-none border-b"
                        />
                    </div>
                    <div className=" flex items-center justify-center">
                        <Button className="uppercase mt-[20px] bg-[#000] text-[#fff] px-[30px] py-[10px]">
                            Gửi đi
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
