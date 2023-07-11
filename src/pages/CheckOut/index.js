import logo from '~/asset/images/logo.png';
import vn from '~/asset/icons/vn.svg';
import { DataAddress } from '~/asset/files/DataAdress';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import { setAddressData } from '~/features/userSlice';
import { error } from '~/components/Toast';

function CheckOut() {
    const { addressData } = useSelector((state) => state.user);
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [tinh, setTinh] = useState({ id: '', index: -1 }); // cả 3 đều đang lưu index của vị trí nằm trong mảng. muốn post phải từ vị trí lấy ra data
    const [huyen, setHuyen] = useState({ id: '', index: -1 });
    const [xa, setXa] = useState({ id: '', index: -1 });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setData(DataAddress);
        setAddress(addressData?.address);
        setName(addressData?.name);
        setPhone(addressData?.phone);
        setTinh(addressData?.tinh);
        setHuyen(addressData?.huyen);
        setXa(addressData?.xa);
    }, [addressData]);
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

    useEffect(() => {
        if (!addressData) {
            (async () => {
                try {
                    const tokenACCESS = localStorage.getItem('tokenACCESS');
                    const tokenREFRESH = localStorage.getItem('tokenREFRESH');

                    if (!tokenREFRESH) {
                        navigate('/login', { replace: true });
                        return;
                    }
                    try {
                        const dataFetch = await axios.get('http://localhost:1209/api/info/address', {
                            headers: {
                                Authorization: tokenACCESS,
                            },
                        });
                        dispatch(setAddressData(dataFetch.data.data));
                    } catch (err) {
                        const newTokenAccess = await GetNewAccessToken();
                        console.log(newTokenAccess);
                        try {
                            const dataFetch = await axios.get(
                                'http://localhost:1209/api/info/address',

                                {
                                    headers: {
                                        Authorization: newTokenAccess,
                                    },
                                },
                            );
                            dispatch(setAddressData(dataFetch.data.data));
                        } catch (e) {
                            throw new Error(e);
                        }
                    }
                } catch (err) {
                    console.log(err.message);
                    error(err.message);
                }
            })();
        }
    }, []);

    return (
        <div className="w-full">
            <div className="max-w-[95em] w-full px-[2em] mx-auto">
                <div className="flex pb-[1.5em] items-center justify-center">
                    <div className="w-[60%] px-[2em] pt-[2em]">
                        <div className="pb-[1.5em]">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div>
                            <div className="mx-[-10px] flex">
                                <div className="px-[1em] w-[55%]">
                                    <div className="mb-[20px]">
                                        <div className="font-medium text-[20px] mb-[12px]">Thông tin nhận hàng</div>
                                        <div className="text-[14px]">
                                            <div className="m-[-0.4em]">
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                            Email
                                                        </label>
                                                        <input
                                                            className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none"
                                                            placeholder="Nhập email"
                                                            type="email"
                                                            // value={}
                                                            // onChange={(e) => {
                                                            //     setName(e.target.value);
                                                            // }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                            Họ và tên
                                                        </label>
                                                        <input
                                                            className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none"
                                                            placeholder="Nhập họ tên"
                                                            type="text"
                                                            value={name}
                                                            onChange={(e) => {
                                                                setName(e.target.value);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                            Số điện thoại
                                                        </label>
                                                        <div className="flex rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none">
                                                            <input
                                                                className="w-[90%] border-r"
                                                                placeholder="Nhập số điện thoại"
                                                                type="tel"
                                                                value={phone}
                                                                onChange={(e) => {
                                                                    setPhone(e.target.value);
                                                                }}
                                                            />
                                                            <div className="absolute top-4 right-5">
                                                                <img
                                                                    src={vn}
                                                                    alt="vietnam"
                                                                    className="object-cover w-[22px] h-[16px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                            Địa chỉ
                                                        </label>
                                                        <input
                                                            className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none"
                                                            placeholder="Nhập địa chỉ"
                                                            type="text"
                                                            value={address}
                                                            onChange={(e) => {
                                                                setAddress(e.target.value);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.2em] ml-[1px] select-none">
                                                            Tỉnh thành
                                                        </label>
                                                        <select
                                                            className="rounded-[4px] w-full px-[0.8em] pt-[0.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none"
                                                            onChange={handleChangeTinh}
                                                        >
                                                            <option value="" hidden="">
                                                                ----
                                                            </option>

                                                            {data &&
                                                                data.map((item, index) => (
                                                                    <option
                                                                        value={item?.Id}
                                                                        key={index}
                                                                        selected={tinh?.index === index ? true : false}
                                                                    >
                                                                        {item.Name}
                                                                    </option>
                                                                ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.2em] ml-[1px] select-none">
                                                            Quận huyện
                                                        </label>
                                                        <select
                                                            className="rounded-[4px] w-full px-[0.8em] pt-[0.8em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none"
                                                            onChange={handleChangeHuyen}
                                                        >
                                                            <option
                                                                value=""
                                                                hidden=""
                                                                selected={huyen?.index === -1 ? true : false}
                                                            >
                                                                ----
                                                            </option>
                                                            {tinh?.id
                                                                ? data[tinh.index]?.Districts?.map((item, index) => {
                                                                      return (
                                                                          <option
                                                                              value={item?.Id}
                                                                              key={index}
                                                                              selected={
                                                                                  huyen?.index === index ? true : false
                                                                              }
                                                                          >
                                                                              {item.Name}
                                                                          </option>
                                                                      );
                                                                  })
                                                                : ''}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="p-[0.4em] w-full">
                                                    <div className="relative">
                                                        <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.2em] ml-[1px] select-none">
                                                            Phường xã
                                                        </label>
                                                        <select
                                                            className="rounded-[4px] w-full px-[0.8em] pt-[0.8em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border focus:outline-none"
                                                            id="ward"
                                                            onChange={handleChangeXa}
                                                        >
                                                            <option
                                                                value=""
                                                                hidden=""
                                                                selected={xa?.index === -1 ? true : false}
                                                            >
                                                                ----
                                                            </option>

                                                            {huyen?.id
                                                                ? data[tinh.index]?.Districts[huyen.index]?.Wards?.map(
                                                                      (item, index) => {
                                                                          return (
                                                                              <option
                                                                                  value={item?.Id}
                                                                                  key={index}
                                                                                  selected={
                                                                                      xa?.index === index ? true : false
                                                                                  }
                                                                              >
                                                                                  {item.Name}
                                                                              </option>
                                                                          );
                                                                      },
                                                                  )
                                                                : ''}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="p-[0.4em] w-full">
                                            <div className="relative">
                                                <label className="absolute text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                    Ghi chú
                                                </label>
                                                <textarea
                                                    className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[64px] border focus:outline-none"
                                                    placeholder="Nhập ghi chú"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-[1em] w-[45%]">div2</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%]">sideBar</div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
