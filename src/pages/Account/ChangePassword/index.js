import DefaultLayerAccount from '../DefaultLayoutAccount';
import Button from '~/components/Button';

function ChangePassword() {
    return (
        <DefaultLayerAccount>
            <div>
                <div className="uppercase text-[19px] mt-[10px] mb-[27px] text-[#212B25] font-normal">Đổi mật khẩu</div>
                <div>
                    <div className="text-[14px] mb-[15px]">
                        Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
                    </div>
                    <div className="py-[8px] mb-[10px]">
                        <div className="uppercase text-[12px] font-medium mb-[10px] flex">
                            Mật khẩu cũ<div className="ml-[5px]">*</div>
                        </div>
                        <input
                            type="text"
                            className="h-[38px] bg-[#fff] w-full px-[15px] border border-[#e5e5e5] rounded-[3px] outline-0 shadow-none"
                            placeholder="Mật khẩu cũ"
                        />
                    </div>
                    <div className="py-[8px] mb-[10px]">
                        <div className="uppercase text-[12px] font-medium mb-[10px] flex">
                            Mật khẩu mới <div className="ml-[5px]">*</div>
                        </div>

                        <input
                            type="text"
                            className="h-[38px] bg-[#fff] w-full px-[15px] border border-[#e5e5e5] rounded-[3px] outline-0 shadow-none"
                            placeholder="Mật khẩu mới"
                        />
                    </div>
                    <div className="py-[8px] mb-[10px]">
                        <div className="uppercase text-[12px] font-medium mb-[10px] flex">
                            Xác nhận lại mật khẩu<div className="ml-[5px]">*</div>
                        </div>
                        <input
                            type="text"
                            className="h-[38px] bg-[#fff] w-full px-[15px] border border-[#e5e5e5] rounded-[3px] outline-0 shadow-none"
                            placeholder="Xác nhận lại mật khẩu"
                        />
                    </div>
                </div>
                <Button className="bg-[#1c1c1c] font-medium px-[28px] h-[40px] text-[#fff] text-[12px] border-0 outline-0 transition-all hover:bg-[#fff] hover:text-[#1c1c1c] hover:border hover:border-[#1c1c1c] duration-450 ease-cubic">
                    ĐẶT LẠI MẬT KHẨU
                </Button>
            </div>
        </DefaultLayerAccount>
    );
}

export default ChangePassword;
