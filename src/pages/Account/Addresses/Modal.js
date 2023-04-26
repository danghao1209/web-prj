import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';

function Modal({ isShow = false, handleClose }) {
    const [data, setData] = useState('');
    const [tinh, setTinh] = useState(''); // cả 3 đều đang lưu index của vị trí nằm trong mảng. muốn post phải từ vị trí lấy ra data
    const [huyen, setHuyen] = useState('');
    const [xa, setXa] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const datafetched = await axios({
                url: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
                method: 'GET',
            });

            setData(datafetched.data);
        };

        // gọi hàm
        fetchData()
            // bắt lỗi
            .catch(console.error);
    }, []);

    const handleChangeTinh = (e) => {
        setHuyen('');
        setXa('');
        setTinh(e.target.value);
    };
    const handleChangeHuyen = (e) => {
        setXa('');
        setHuyen(e.target.value);
    };
    const handleChangeXa = (e) => {
        setXa(e.target.value);
    };

    const handleRenderHuyen = () => {
        if (!huyen) {
            <option value="" hidden="">
                ----
            </option>;
            data[tinh].Districts[huyen].Wards.map((item, index) => {
                return (
                    <option value={index} key={index}>
                        {item.Name}
                    </option>
                );
            });
        }
    };

    return (
        <div className={isShow ? '' : 'hidden'}>
            <div className=" fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex z-[10] justify-center items-center top-0 left-0">
                <div className="bg-white h-[480px] w-[710px] overflow-x-hidden overflow-y-auto mr-[17px] py-[15px] rounded-[5px]">
                    <div className="flex justify-between font-bold text-[16px] border-b border-[#E0E0E0] mb-[8px]">
                        <div className="uppercase px-[34px] pb-[15px] flex justify-between items-center">
                            Thêm địa chỉ mới
                        </div>
                        <div
                            className="w-[30px] h-[30px] text-[14px] cursor-pointer px-[10px] flex justify-between items-center mr-[10px]"
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="mx-[27px] text-[14px]">
                        <div className="mb-[10px]">
                            <div>
                                <div className="uppercase mb-[5px] ">Họ tên</div>
                                <input
                                    type="text"
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px]"
                                    placeholder="Họ tên"
                                />
                            </div>
                        </div>
                        <div className="mb-[10px] flex">
                            <div className="w-[50%] pr-[15px]">
                                <div className="uppercase mb-[5px] ">Số điện thoại</div>
                                <input
                                    type="tel"
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px]"
                                    placeholder="Số Điện Thoại"
                                />
                            </div>
                            <div className="w-[50%] pl-[15px]">
                                <div className="uppercase mb-[5px] ">Email</div>
                                <input
                                    type="email"
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px]"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-[10px]">
                            <div className="w-[30%]">
                                <div className="uppercase">Tỉnh thành</div>
                                <select
                                    className="border border-[#e6e6e6] min-h-[40px] w-full rounded-[3px]"
                                    onChange={handleChangeTinh}
                                >
                                    <option value="" hidden="">
                                        ----
                                    </option>
                                    {data
                                        ? data.map((item, index) => {
                                              return (
                                                  <option value={index} key={index}>
                                                      {item.Name}
                                                  </option>
                                              );
                                          })
                                        : ''}
                                </select>
                            </div>
                            <div className="w-[30%]">
                                <div className="uppercase">Huyện</div>
                                <select
                                    className="border border-[#e6e6e6] min-h-[40px] w-full rounded-[3px]"
                                    onChange={handleChangeHuyen}
                                >
                                    <option value="" hidden="">
                                        ----
                                    </option>
                                    {tinh
                                        ? data[tinh].Districts.map((item, index) => {
                                              return (
                                                  <option value={index} key={index}>
                                                      {item.Name}
                                                  </option>
                                              );
                                          })
                                        : ''}
                                </select>
                            </div>
                            <div className="w-[30%]">
                                <div className="uppercase">Xã</div>
                                <select
                                    className="border border-[#e6e6e6] min-h-[40px] w-full rounded-[3px]"
                                    id="ward"
                                    onChange={handleChangeXa}
                                >
                                    <option value="" hidden="">
                                        ----
                                    </option>

                                    {huyen
                                        ? data[tinh].Districts[huyen].Wards.map((item, index) => {
                                              return (
                                                  <option value={index} key={index}>
                                                      {item.Name}
                                                  </option>
                                              );
                                          })
                                        : ''}
                                </select>
                            </div>
                        </div>
                        <div className="mb-[10px]">
                            <div>
                                <div className="uppercase mb-[5px] ">Địa chỉ</div>
                                <input
                                    type="text"
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px]"
                                    placeholder="Địa chỉ ................"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-[14px] text-[#3d3d3d] mx-[27px] mt-[10px] mb-[40px]">
                        <div className="flex items-center">
                            <input type="checkbox" value="true" />
                            <div className="pl-[10px] ">Đặt là địa chỉ mặc định?</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end mx-[27px]">
                        <Button
                            className="rounded-[3px] px-[15px] bg-[#fff] border border-[rgb(235, 235, 235)] h-[40px] mr-[5px]"
                            onClick={handleClose}
                        >
                            Huỷ
                        </Button>
                        <Button className="bg-[#1c1c1c] font-medium px-[28px] h-[40px] text-[#fff] text-[12px] uppercase border-0 outline-0 transition-all hover:bg-[#fff] hover:text-[#1c1c1c] hover:border hover:border-[#1c1c1c] duration-450 ease-cubic ">
                            THÊM ĐỊA CHỈ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
