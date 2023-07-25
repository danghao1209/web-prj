import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ListItemCheckOut({ data }) {
    const [dataPro, setDataPro] = useState();
    const { dataProAll } = useSelector((state) => state.productsAll);

    useEffect(() => {
        (async () => {
            const foundItem = _.find(dataProAll.products, { _id: data.id });
            setDataPro(foundItem);
            console.log(foundItem);
        })();
    }, [dataProAll.products]);
    return (
        <div className="w-full flex pt-[14px]">
            <div className="relative w-[10%] h-[50px] border rounded-[4px]">
                {console.log(dataPro)}
                <img src={`${dataPro?.data[data.color].images[0]?.url}`} alt="" className="w-[40px] h-[48px] mx-auto" />
                <div className=" text-[10px] absolute top-[-8px] right-[-10px] px-[7px] font-[10px] text-[#fff] bg-[#2a9dcc] min-w-[22px] h-[22px] text-center leading-[22px] rounded-[50%]">
                    {data?.quantity}
                </div>
            </div>
            <div className="w-[60%] text-[14px] pl-[1em]">
                <div className="text-[#333] text-[16px]">{dataPro?.title}</div>
                <div className="flex items-center">
                    <div
                        className={`w-[15px] h-[15px] ml-[3px] mr-[5px] ${
                            dataPro?.data[data.color].color
                        } border border-[#e5e5e5]`}
                    ></div>{' '}
                    / {data.size.toUpperCase()}
                </div>
            </div>
            <div className="w-[30%] text-[14px] pl-[1em] flex items-center justify-center">
                <div className="text-[16px]">
                    {Math.round(dataPro?.price - (dataPro?.price * dataPro?.discountPercentage) / 100) * data?.quantity}
                    .000₫
                </div>
            </div>
        </div>
    );
}

export default ListItemCheckOut;
