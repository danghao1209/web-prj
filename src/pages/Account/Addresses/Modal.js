import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import { DataAddress } from '~/asset/files/DataAdress';
import { useNavigate } from 'react-router-dom';
import ToastMessage, { success, error } from '~/components/Toast';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import { pathApi, authApi } from '~/asset/path';

function Modal({ isShow = false, handleClose, dataAdd }) {
    const [data, setData] = useState();
    const [tinh, setTinh] = useState({ id: '', index: -1 }); // cả 3 đều đang lưu index của vị trí nằm trong mảng. muốn post phải từ vị trí lấy ra data
    const [huyen, setHuyen] = useState({ id: '', index: -1 });
    const [xa, setXa] = useState({ id: '', index: -1 });
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setData(DataAddress);
    }, []);

    const handleChangeTinh = (e) => {
        setTinh({ id: e.target.value, index: e.target.selectedIndex - 1 });
        setHuyen({ id: '', index: -1 });
        setXa({ id: '', index: -1 });
    };
    const handleChangeHuyen = (e) => {
        setHuyen({ id: e.target.value, index: e.target.selectedIndex - 1 });
        setXa({ id: '', index: -1 });
    };
    const handleChangeXa = (e) => {
        setXa({ id: e.target.value, index: e.target.selectedIndex - 1 });
    };

    const addAdress = async () => {
        try {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');

            if (!tokenREFRESH) {
                navigate('/login', { replace: true });
                return;
            }
            if (!name || !phone || !address || tinh.index === -1 || huyen.index === -1 || xa.index === -1) {
                throw new Error('Vui lòng điền đầy đủ thông tin địa chỉ');
            }
            try {
                await axios.post(
                    `${pathApi}/info/address`,
                    {
                        phone,
                        address,
                        name,
                        tinh,
                        huyen,
                        xa,
                    },
                    {
                        headers: {
                            Authorization: tokenACCESS,
                        },
                    },
                );

                success('Đổi mật khẩu thành công');
                setTimeout(() => {
                    handleClose();
                }, 2000);
            } catch (err) {
                const newTokenAccess = await GetNewAccessToken();
                try {
                    await axios.post(
                        `${pathApi}/info/address`,
                        {
                            phone,
                            address,
                            name,
                            tinh,
                            huyen,
                            xa,
                        },
                        {
                            headers: {
                                Authorization: newTokenAccess,
                            },
                        },
                    );

                    success('Thêm địa chỉ thành công');
                } catch (e) {
                    throw new Error(e);
                }
            }
        } catch (err) {
            console.log(err.message);
            error(err.message);
        }
    };

    return (
        <div className={isShow ? '' : 'hidden'}>
            <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex z-[10] justify-center items-center top-0 left-0">
                <div className="bg-white h-[450px] w-[710px] overflow-x-hidden overflow-y-auto lg:mr-[17px] py-[15px] rounded-[5px]">
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
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px] text-[16px]"
                                    placeholder="Họ tên"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-[10px] flex">
                            <div className="w-[70%] pr-[15px]">
                                <div className="uppercase mb-[5px] ">Số điện thoại</div>
                                <input
                                    type="tel"
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px] text-[15px]"
                                    placeholder="Số Điện Thoại"
                                    value={phone}
                                    maxLength="10"
                                    onChange={(e) => {
                                        setPhone(e.target.value.replace(/[^0-9]/g, ''));
                                    }}
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
                                        ? data?.map((item, index) => {
                                              return (
                                                  <option value={item?.Id} key={index}>
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
                                    <option value="" hidden="" selected={huyen.index === -1 ? true : false}>
                                        ----
                                    </option>
                                    {tinh?.id
                                        ? data[tinh.index]?.Districts?.map((item, index) => {
                                              return (
                                                  <option value={item?.Id} key={index}>
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
                                    <option value="" hidden="" selected={xa.index === -1 ? true : false}>
                                        ----
                                    </option>

                                    {huyen?.id
                                        ? data[tinh.index]?.Districts[huyen.index]?.Wards?.map((item, index) => {
                                              return (
                                                  <option value={item?.Id} key={index}>
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
                                    className="w-full min-h-[40px] px-[8px] py-[4px] border border-[#e6e6e6] outline-none rounded-[3px] text-[15px]"
                                    placeholder="Địa chỉ ................"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-[14px] text-[#3d3d3d] mx-[27px] mt-[10px] mb-[40px]">
                        <div className="flex items-center">
                            <input type="checkbox" value="true" />
                            <div className="pl-[10px] ">Đặt là địa chỉ mặc định?</div>
                        </div>
                    </div> */}

                    <div className="flex items-center justify-end mx-[27px] mt-[20px]">
                        <Button
                            className="rounded-[3px] px-[15px] bg-[#fff] border border-[rgb(235, 235, 235)] h-[40px] mr-[5px]"
                            onClick={handleClose}
                        >
                            Huỷ
                        </Button>
                        <Button
                            onClick={addAdress}
                            className="bg-[#1c1c1c] font-medium px-[28px] h-[40px] text-[#fff] text-[12px] uppercase border-0 outline-0 transition-all hover:bg-[#fff] hover:text-[#1c1c1c] hover:border hover:border-[#1c1c1c] duration-450 ease-cubic"
                        >
                            THÊM ĐỊA CHỈ
                        </Button>
                    </div>
                </div>
            </div>
            <ToastMessage />
        </div>
    );
}

export default Modal;
