import { useEffect, useState } from 'react';
import DefaultLayerAccount from '../DefaultLayoutAccount';
import { DataAddress } from '~/asset/files/DataAdress';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pathApi } from '~/asset/path';
import GetNewAccessToken from '~/func/GetNewAccessToken';

function Orders() {
    const [orders, setOrders] = useState();
    const [dataAddress, setDataAddress] = useState();
    const navigate = useNavigate();
    const parseDate = (dateString) => {
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Tháng trong JavaScript đếm từ 0 (0 - 11)
        const day = dateObject.getDate();

        return `${day}/${month}/${year}`;
    };
    const paymentDetail = (status) => {
        if (status[status.length - 1] !== 'Đã giao hàng') {
            return 'Chưa thu tiền';
        }
        return 'Đã thu tiền';
    };
    useEffect(() => {
        (async () => {
            try {
                const tokenACCESS = localStorage.getItem('tokenACCESS');
                const tokenREFRESH = localStorage.getItem('tokenREFRESH');
                setDataAddress(DataAddress);
                if (!tokenREFRESH) {
                    navigate('/login', { replace: true });
                    return;
                }
                try {
                    const dataFetch = await axios.get(`${pathApi}/info/orders`, {
                        headers: {
                            Authorization: tokenACCESS,
                        },
                    });
                    setOrders(dataFetch?.data?.data);
                } catch (err) {
                    const newTokenAccess = await GetNewAccessToken();
                    try {
                        const dataFetch = await axios.get(
                            `${pathApi}/info/orders`,

                            {
                                headers: {
                                    Authorization: newTokenAccess,
                                },
                            },
                        );
                        setOrders(dataFetch?.data?.data);
                    } catch (e) {
                        throw new Error(e);
                    }
                }
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, []);
    return (
        <DefaultLayerAccount>
            <div className="lg:px-[20px]">
                <div className="uppercase text-[19px] mt-[20px] mb-[27px] text-[#212B25] font-normal">
                    Đơn hàng của bạn
                </div>
                <div className="overflow-x-scroll max-w-[100%] lg:overflow-visible">
                    <div className="w-[1050px] font-antialiased">
                        <div>
                            <div className="flex font-medium border-b text-[18px]">
                                <div className="w-[15%] border px-[5px] py-[10px] text-center">Đơn hàng</div>
                                <div className="w-[10%] border px-[5px] py-[10px] text-center">Ngày</div>
                                <div className="w-[37.5%] border px-[5px] py-[10px] text-center">Địa chỉ</div>
                                <div className="w-[12.5%] border px-[5px] py-[10px] text-center">Giá trị đơn hàng</div>
                                <div className="w-[12.5%] border px-[5px] py-[10px] text-center">TT Thanh toán</div>
                                <div className="w-[12.5%] border px-[5px] py-[10px] text-center">TT Vận Chuyển</div>
                            </div>
                        </div>
                        {console.log(orders)}
                        {orders?.map((item, i) => {
                            return (
                                <div key={i} className="">
                                    <div className="flex w-full text-[14px]">
                                        <div className="w-[15%] border px-[5px] py-[5px] text-[#dc4e3f] text-[12px]">
                                            {item._id}
                                        </div>
                                        <div className="w-[10%] border px-[5px] py-[5px] text-center">
                                            {parseDate(item?.updatedAt)}
                                        </div>
                                        <div className="w-[37.5%] border px-[5px] py-[5px] text-[12px]">{`${
                                            item?.detailedAddress?.address
                                        }, ${
                                            dataAddress[item?.detailedAddress?.tinh?.index]?.Districts[
                                                item?.detailedAddress?.huyen?.index
                                            ]?.Wards[item?.detailedAddress?.xa?.index]?.Name
                                        }, ${
                                            dataAddress[item?.detailedAddress?.tinh?.index]?.Districts[
                                                item?.detailedAddress?.huyen?.index
                                            ]?.Name
                                        }, ${dataAddress[item?.detailedAddress?.tinh?.index]?.Name}`}</div>
                                        <div className="w-[12.5%] border px-[10px] py-[5px] text-center">
                                            {item?.lastPrice}₫
                                        </div>
                                        <div className="w-[12.5%] border px-[5px] py-[5px]">
                                            {paymentDetail(item?.status)}
                                        </div>
                                        <div className="w-[12.5%] border px-[5px] py-[5px]">
                                            {item?.status[item?.status?.length - 1]}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DefaultLayerAccount>
    );
}

export default Orders;
