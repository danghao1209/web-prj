import icon from '~/asset/images/icon.png';

function AboutPage() {
    return (
        <div className="lg:mt-[105px]">
            <div className="pt-[20px]">
                <div className="w-[70%] mx-auto px-[15px]">
                    <div className="mx-[-15px]">
                        <div className="px-[15px]">
                            <div className="flex flex-col items-center mt-[20px] mb-[10px] text-[20px] font-semibold">
                                Giới thiệu
                            </div>
                            <div className="flex flex-col items-center text-[16px] mb-[30px]">
                                <img src={icon} alt="" className="w-auto h-[97px] mb-[10px]" />
                                <div className="mb-[10px] text-center">
                                    Câu chuyện bắt đầu vào năm 2011 của Hà Nội, khi chúng tôi - những con người yêu
                                    Hip-hop và thời trang đường phố tụ họp lại. Một vài người là B-Boy và C-Walker, một
                                    số khác là Beatboxer. Nhưng tất cả đều có chung một câu hỏi:
                                </div>
                                <div>“Chúng ta có thể làm gì cho cộng đồng những người yêu Streetwear và Hip-hop?</div>
                            </div>
                            <div className="mb-[20px]">
                                <img
                                    src="//bizweb.dktcdn.net/100/414/728/files/317142184-524797399577245-7396206391814838519-n.jpg?v=1669957930487"
                                    alt=""
                                />
                            </div>
                            <div className="text-[16px] mb-[30px]">
                                <div className="flex flex-col items-center mt-[20px] mb-[10px] text-[20px] font-semibold">
                                    Brand Vision
                                </div>
                                <div className="mb-[10px] text-center">
                                    Một trong những đại diện lớn nhất của thời trang & văn hoá hiphop thủ đô, trong suốt
                                    những năm qua "chú hề" liên tục chuyển mình, mang đến nhiều niềm vui, sự mới mẻ
                                </div>
                                <div className="mb-[10px] text-center">
                                    Và sẽ không dừng lại ở đó, DahaClown mong muốn trở thành 1 phần quan trọng trong
                                    việc phát triển, phổ biến văn hoá hiphop nói riêng & là đại diện nổi bật của tinh
                                    thần đột phá trong thời trang đường phố Việt Nam
                                </div>
                            </div>
                            <div className="text-[16px] mb-[30px]">
                                <div className="flex flex-col items-center mt-[20px] mb-[10px] text-[20px] font-semibold">
                                    Brand Mission
                                </div>
                                <div className="mb-[10px] text-center">
                                    Chúng tôi đam mê với việc truyền tải nền văn hoá Hip-hop, Streetwear lâu đời từ Âu
                                    Mỹ tới với những khách hàng Việt Nam. Để mỗi sản phẩm được bán ra, ngoài sự chau
                                    chuốt về chất lượng và thiết kế, chúng tôi còn đem vào đó một tinh thần vui vẻ, màu
                                    sắc và thật nhiều giá trị phía sau
                                </div>
                            </div>
                            <div className="text-[16px] mb-[30px]">
                                <div className="flex flex-col items-center mt-[20px] mb-[10px] text-[20px] italic">
                                    DahaClown stand for Northside
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
