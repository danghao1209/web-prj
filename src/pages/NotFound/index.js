import Button from '~/components/Button';
import notFoundImage from '~/asset/images/notfound.png';

function NotFound() {
    return (
        <div className="lg:w-[80%] mx-auto mt-[90px] mb-[30px] lg:px-[20px] lg:mt-[105px]">
            <div className="py-[40px] mt-[20px] mb-[30px]">
                <img src={notFoundImage} alt={notFoundImage} className="mx-auto" />
            </div>
            <div className="mt-[20px] mb-[10px] text-[28px] text-center font-medium leading-[39.2px]">
                Lỗi không tìm thấy trang
            </div>
            <div className="text-[14px] text-[#888] leading-[23.8px] mb-[15px] text-center">
                Có vẻ như các trang mà bạn đang cố gắng tiếp cận không tồn tại nữa hoặc có thể nó vừa di chuyển.
            </div>
            <div className="flex items-center justify-center">
                <Button
                    to={'/'}
                    className="uppercase text-[#fff] text-[14px] bg-[#dc4e3f] rounded-[4px] px-[20px] leading-[39px]"
                >
                    Về Trang Chủ
                </Button>
            </div>
        </div>
    );
}

export default NotFound;
