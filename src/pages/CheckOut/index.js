import logo from '~/asset/images/logo.png';
import vn from '~/asset/icons/vn.svg';
import { DataAddress } from '~/asset/files/DataAdress';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import { setAddressData } from '~/features/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { faChevronLeft, faCreditCard, faTruck } from '@fortawesome/free-solid-svg-icons';
import ListItemCheckOut from './ListItemCheckOut';
import ToastMessage, { success, error } from '~/components/Toast';
import DoneBuy from './DoneBuy';
import { pathApi } from '~/asset/path';

function CheckOut() {
    const { addressData } = useSelector((state) => state.user);
    const { cart, priceCart } = useSelector((state) => state.cart);
    const [email, setEmail] = useState();
    const [priceLast, setPriceLast] = useState();
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [tinh, setTinh] = useState({ id: '', index: -1 }); // cả 3 đều đang lưu index của vị trí nằm trong mảng. muốn post phải từ vị trí lấy ra data
    const [huyen, setHuyen] = useState({ id: '', index: -1 });
    const [xa, setXa] = useState({ id: '', index: -1 });
    const [note, setNote] = useState();
    const [sold, setSold] = useState({ status: false, data: {} });

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
        if (priceCart?.discountPrice > 700) {
            setPriceLast(priceCart?.discountPrice);
        } else {
            setPriceLast(priceCart?.discountPrice + 30);
        }
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
    const handleBuyCart = async () => {
        try {
            const tokenACCESS = localStorage.getItem('tokenACCESS');
            const tokenREFRESH = localStorage.getItem('tokenREFRESH');

            if (!tokenREFRESH) {
                navigate('/login', { replace: true });
                return;
            }
            console.log(phone);
            const response = await axios.post(
                `${pathApi}/payment/`,
                { idCart: cart._id, data: { phone, name, address, tinh, huyen, xa, note } },
                {
                    headers: {
                        Authorization: tokenACCESS,
                    },
                },
            );
            success(response.data.message);
            setSold({
                status: true,
                data: {
                    name,
                    phone,
                    address,
                    tinh,
                    huyen,
                    xa,
                    email,
                    addressData,
                    cart,
                    priceCart,
                    priceLast,
                },
            });
            return response.data;
        } catch (error) {
            try {
                const newTokenAccess = await GetNewAccessToken();
                const response = await axios.post(
                    `${pathApi}/payment/`,
                    { idCart: cart._id, data: { phone, name, address, tinh, huyen, xa, note } },
                    {
                        headers: {
                            Authorization: newTokenAccess,
                        },
                    },
                );
                success(response.data.message);
                setSold({
                    status: true,
                    data: {
                        name,
                        phone,
                        address,
                        tinh,
                        huyen,
                        xa,
                        email,
                        addressData,
                        cart,
                        priceCart,
                    },
                });
                return response.data;
            } catch (error) {
                error('Mua hàng thất bại vui lòng quay lại giỏ hàng để thanh toán lại');
            }
        }
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
                        const dataFetch = await axios.get(`${pathApi}/info/address`, {
                            headers: {
                                Authorization: tokenACCESS,
                            },
                        });
                        const dataUser = await axios.get(`${pathApi}/info`, {
                            headers: {
                                Authorization: tokenACCESS,
                            },
                        });
                        dispatch(setAddressData(dataFetch.data.data));
                        setEmail(dataUser?.data?.data.email);
                    } catch (err) {
                        const newTokenAccess = await GetNewAccessToken();
                        console.log(newTokenAccess);
                        try {
                            const dataFetch = await axios.get(`${pathApi}/info/address`, {
                                headers: {
                                    Authorization: newTokenAccess,
                                },
                            });
                            const dataUser = await axios.get(`${pathApi}/info`, {
                                headers: {
                                    Authorization: tokenACCESS,
                                },
                            });
                            dispatch(setAddressData(dataFetch.data.data));
                            setEmail(dataUser?.data?.data.email);
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
        <div>
            {sold?.status ? (
                <DoneBuy sold={sold} />
            ) : (
                <div className="w-full py-[40px]">
                    <div className="lg:max-w-[95em] w-full lg:px-[2em] lg:mx-auto">
                        <div className="lg:flex pb-[1.5em] justify-center relative">
                            <div className="lg:absolute lg:top-0 lg:left-0 flex items-center justify-center lg:block lg:pb-[1.5em] border-b lg:border-b-0 pb-[10px] drop-shadow-md">
                                <Link to={'/'}>
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="flex-col-reverse lg:flex lg:flex-row w-full">
                                <div className="lg:w-[60%] px-[10px] lg:px-[2em] pt-[2em] lg:border-r lg:mt-[30px]">
                                    <div className="border-b pb-[2em]">
                                        <div className="mx-[-10px] lg:flex">
                                            <div className="px-[1em] lg:w-[55%]">
                                                <div className="mb-[20px]">
                                                    <div className="font-semibold text-[20px] mb-[12px]">
                                                        Thông tin nhận hàng
                                                    </div>
                                                    <div className="text-[14px]">
                                                        <div className="m-[-0.4em]">
                                                            <div className="p-[0.4em] w-full">
                                                                <div className="relative ">
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                                        Email
                                                                    </label>
                                                                    <input
                                                                        className="disabled rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#f1f1f1] text-[#333] h-[44px] border border-[#d9d9d9] focus:outline-[#66afe9]"
                                                                        placeholder="Nhập email"
                                                                        type="email"
                                                                        disabled
                                                                        value={email}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="p-[0.4em] w-full">
                                                                <div className="relative">
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                                        Họ và tên
                                                                    </label>
                                                                    <input
                                                                        className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border border-[#d9d9d9] focus:outline-[#66afe9]"
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
                                                                <div className="relative focus:outline-[#66afe9]">
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none ">
                                                                        Số điện thoại
                                                                    </label>
                                                                    <div className="flex rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border border-[#d9d9d9]">
                                                                        <input
                                                                            className="w-[90%] border-r focus:outline-none"
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
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                                        Địa chỉ
                                                                    </label>
                                                                    <input
                                                                        className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border border-[#d9d9d9] focus:outline-[#66afe9]"
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
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.2em] ml-[1px] select-none">
                                                                        Tỉnh thành
                                                                    </label>
                                                                    <select
                                                                        className="rounded-[4px] w-full px-[0.8em] pt-[0.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border border-[#d9d9d9] focus:outline-[#66afe9]"
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
                                                                                    selected={
                                                                                        tinh?.index === index
                                                                                            ? true
                                                                                            : false
                                                                                    }
                                                                                >
                                                                                    {item.Name}
                                                                                </option>
                                                                            ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="p-[0.4em] w-full">
                                                                <div className="relative">
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.2em] ml-[1px] select-none">
                                                                        Quận huyện
                                                                    </label>
                                                                    <select
                                                                        className="rounded-[4px] w-full px-[0.8em] pt-[0.8em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border border-[#d9d9d9] focus:outline-[#66afe9]"
                                                                        onChange={handleChangeHuyen}
                                                                    >
                                                                        <option
                                                                            value=""
                                                                            hidden=""
                                                                            selected={
                                                                                huyen?.index === -1 ? true : false
                                                                            }
                                                                        >
                                                                            ----
                                                                        </option>
                                                                        {tinh?.id
                                                                            ? data[tinh.index]?.Districts?.map(
                                                                                  (item, index) => {
                                                                                      return (
                                                                                          <option
                                                                                              value={item?.Id}
                                                                                              key={index}
                                                                                              selected={
                                                                                                  huyen?.index === index
                                                                                                      ? true
                                                                                                      : false
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
                                                            <div className="p-[0.4em] w-full">
                                                                <div className="relative">
                                                                    <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.2em] ml-[1px] select-none">
                                                                        Phường xã
                                                                    </label>
                                                                    <select
                                                                        className="rounded-[4px] w-full px-[0.8em] pt-[0.8em] pb-[0.4em] bg-[#fff] text-[#333] h-[44px] border border-[#d9d9d9] focus:outline-[#66afe9]"
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
                                                                            ? data[tinh.index]?.Districts[
                                                                                  huyen.index
                                                                              ]?.Wards?.map((item, index) => {
                                                                                  return (
                                                                                      <option
                                                                                          value={item?.Id}
                                                                                          key={index}
                                                                                          selected={
                                                                                              xa?.index === index
                                                                                                  ? true
                                                                                                  : false
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-[20px] lg-mb-[0px]">
                                                    <div className="p-[0.4em] w-full">
                                                        <div className="relative">
                                                            <label className="absolute text-[#999] text-[0.84em] px-[0.9em] top-0 w-full mt-[0.4em] ml-[1px] select-none">
                                                                Ghi chú
                                                            </label>
                                                            <textarea
                                                                className="rounded-[4px] w-full px-[0.8em] pt-[1.5em] pb-[0.4em] bg-[#fff] text-[#333] h-[64px] border border-[#d9d9d9] focus:outline-[#66afe9]"
                                                                placeholder="Nhập ghi chú"
                                                                type="text"
                                                                value={note}
                                                                onChange={(e) => {
                                                                    setNote(e.target.value);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-[1em] lg:w-[45%]">
                                                <div>
                                                    <div className="mb-[12px]">
                                                        <div className="flex items-baseline font-semibold text-[1.15rem] mb-[12px]">
                                                            <FontAwesomeIcon
                                                                icon={faTruck}
                                                                className="mr-[5px] lg:hidden"
                                                            />
                                                            Vận chuyển
                                                        </div>
                                                        <div className="border border-[#d9d9d9] rounded-[4px]">
                                                            <div className="pr-[0.75em] flex items-center justify-between pl-[10px] py-[0.8em]">
                                                                <input
                                                                    type="radio"
                                                                    className="w-[16px] h-[16px] bg-[#F87DA9] top-4 left-4 rounded-full transition-all duration-200 ease"
                                                                    checked
                                                                />
                                                                <div className="ml-[-50px]">Chuyển phát nhanh</div>
                                                                <div>30.000đ</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pt-[10px] lg:pt-0 mb-[12px]">
                                                        <div className="flex items-baseline font-semibold text-[1.15rem] mb-[12px]">
                                                            <FontAwesomeIcon
                                                                icon={faCreditCard}
                                                                className="mr-[5px] lg:hidden"
                                                            />
                                                            Thanh toán
                                                        </div>
                                                        <div className="border border-[#d9d9d9] rounded-[4px]">
                                                            <div className="pr-[0.75em] flex items-center justify-between pl-[10px] py-[0.8em]">
                                                                <input
                                                                    type="radio"
                                                                    className="w-[16px] h-[16px] bg-[#F87DA9] top-4 left-4 rounded-full transition-all duration-200 ease"
                                                                    checked
                                                                />
                                                                <div className="ml-[-30px]">
                                                                    Thanh toán khi giao hàng (COD)
                                                                </div>
                                                                <div>
                                                                    <FontAwesomeIcon
                                                                        icon={faMoneyBill1}
                                                                        className="text-[red]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-[40%]">
                                    <div className="border-b pl-[10px] lg:pl-[2em] py-[20px]">
                                        <div className="text-[1.15rem] text-[#333] font-semibold">
                                            Đơn hàng ({cart?.totalQuanlity} sản phẩm)
                                        </div>
                                    </div>
                                    <div className="px-[20px] lg:px-0 lg:pl-[2em] text-[#717171]">
                                        <div className="w-full">
                                            <div className="py-[1em] overflow-x-auto max-h-calc-viewport-minus-480">
                                                {cart?.carts?.map((item, i) => {
                                                    return (
                                                        <ListItemCheckOut
                                                            key={item.id + i}
                                                            data={item}
                                                        ></ListItemCheckOut>
                                                    );
                                                })}
                                            </div>

                                            <div className="py-[1em]">
                                                <div className="py-[1em] border-y">
                                                    <div className="m-[-8px]">
                                                        <div className="p-[8px] flex">
                                                            <input
                                                                className="h-[44px] w-[80%] pl-[20px] border rounded-[4px] focus:outline-[#66afe9]"
                                                                placeholder="Nhập mã giảm giá"
                                                            />
                                                            <Button className="w-[20%] ml-[20px] text-[#fff] bg-[#357ebd] rounded-[4px]">
                                                                Áp dụng
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-[1em] border-t text-[16px]">
                                                <div>
                                                    <div className="flex items-center justify-between px-[20px] pt-[10px]">
                                                        <div>Tạm tính:</div>
                                                        <div>{priceCart?.discountPrice}.000₫</div>
                                                    </div>
                                                    <div className="flex items-center justify-between px-[20px] pt-[10px]">
                                                        <div>Phí vận chuyển:</div>
                                                        <div>30.000₫</div>
                                                    </div>
                                                    <div className="flex items-center justify-between px-[20px] font-semibold pt-[10px]">{`Freeship đơn hàng >700k`}</div>
                                                </div>
                                            </div>
                                            <div className="py-[1em] border-t">
                                                <div className="flex items-center justify-between px-[20px]">
                                                    <div className="text-[20px]">Tổng cộng</div>
                                                    <div className="text-[20px] text-[#2a9dcc] font-semibold">
                                                        {priceLast}.000₫
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-[1em] mb-[20px] mx-[20px]">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-center text-[#357ebd]">
                                                        <Link to="/cart">
                                                            <FontAwesomeIcon
                                                                icon={faChevronLeft}
                                                                className="mr-[5px]"
                                                            />
                                                            Quay về giỏ hàng
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <Button
                                                            className="uppercase text-[#fff] rounded-[5px] bg-[#357ebd] py-[12px] px-[28px]"
                                                            onClick={handleBuyCart}
                                                        >
                                                            ĐẶT HÀNG
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastMessage />
        </div>
    );
}

export default CheckOut;
