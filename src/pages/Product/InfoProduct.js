import myimg from '../../asset/imgs/select-pro.png';

function InfoProduct({ data = [] }) {
    return (
        <div className="px-[15px]">
            <div className="mb-[5px] mt-[0px] text-[25px] text-[#707070] font-medium">
                CLOWNZ FLAME ACID WASHED SLEEVELESS SHIRT
            </div>

            <div className="border-t border-b  border-dashed border-gray-300 py-[10px] mb-[10px]">
                <div className="flex items-center">
                    <div className="tracking-[0.25px] font-bold text-[18px]">494.100₫</div>
                    <div className="tracking-[0.25px] text-[14px] line-through ml-[10px]">494.100₫</div>
                </div>
                <div>
                    <div className="flex">
                        Tiết kiệm: <div className="text-[#dc4e3f] font-medium">54.900₫</div>
                    </div>
                </div>
            </div>

            <div className="mb-[15px]">
                <div>
                    <div className="font-bold text-[#1c1c1c] w-full tracking-[0.5px] my-[2px]">Màu sắc: </div>
                    <div className="flex">
                        <div className="mb-[5px] mr-[5px] w-[80px] h-[100px] p-[2px] overflow-auto relative bg-transparent border border-gray-900">
                            <img src={data[0].src[0]} alt="" />
                            <div className="absolute bottom-0 right-0">
                                <img src={myimg} alt="" />
                            </div>
                        </div>
                        <div className="mb-[5px] mr-[5px] w-[80px] h-[100px] p-[2px] overflow-auto relative bg-transparent border border-gray-900">
                            <img src={data[0].src[0]} alt="" />
                            <div className="absolute bottom-0 right-0">
                                <img src={myimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-[15px]">
                <div>
                    <div className="font-bold text-[#1c1c1c] w-full tracking-[0.5px] my-[2px] ">Size: </div>
                    <div>
                        <div className="w-[50px] h-[50px] mb-[5px] mr-[5px] relative before:w-[100%] before:h-[1px] before:bg-[#aeaeae] before:absolute before:transform before:rotate-45 before:bottom-[50%] after:w-[100%] after:h-[1px] after:bg-[#aeaeae] after:absolute after:transform after:rotate-[-45deg] after:bottom-[50%]">
                            <div className="w-full h-full px-[5px] border border-gray-900 flex justify-center items-center font-semibold">
                                M
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <img src={myimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoProduct;
