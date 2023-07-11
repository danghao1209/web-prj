import Product from './Product';
import SearchNonQuerry from './SearchNonQuerry';
import { useEffect, useState } from 'react';

function SearchWithQuery({ dataRender = [] }) {
    const path = 'http://localhost:1209/';
    const [data, setData] = useState([]);
    useEffect(() => {
        (() => {
            setData(dataRender);
        })();
    }, [dataRender]);
    return (
        <div className="pt-[20px] w-[80%] m-auto">
            <div className="mb-[20px] text-[22px] tracking-[2px] uppercase flex justify-center items-center text-center">
                CÓ {`${dataRender?.length}`} KẾT QUẢ TÌM KIẾM PHÙ HỢP
            </div>
            <div className="lg:px-[50px] lg:mx-[-15px] lg:mt-[20px]">
                <div>
                    {dataRender?.length !== 0 ? (
                        <div className="grid grid-cols-2 gap-y-[50px] lg:grid-cols-5 lg:gap-y-[50px]">
                            {data?.map((product) => {
                                return <Product product={product} path={path} />;
                            })}
                        </div>
                    ) : (
                        <div className="pt-[30px] w-[80%] m-auto">
                            <div className="mb-[20px] text-[22px] tracking-[2px] uppercase flex justify-center items-center text-center">
                                KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN.
                            </div>
                            <div>
                                <SearchNonQuerry />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchWithQuery;
