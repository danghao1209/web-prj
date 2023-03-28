import { useState, useEffect } from 'react';
import axios from 'axios';

import Product from './Product';

function ProductPage() {
    const [dataPro, setDataPro] = useState({ products: [] });
    const path = 'http://localhost:1209/';

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await axios.get(`${path}api/product/all`);
                if (result.status === 200) {
                    setDataPro(result.data);
                } else {
                    console.log('lỗi');
                }
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 gap-y-[50px] px-[50px] mt-[105px]">
                {dataPro.length !== 0 ? (
                    dataPro.products.map((product) => {
                        return <Product product={product} path={path} />;
                    })
                ) : (
                    <div>Chưa có sản phẩm nào.</div>
                )}

                <div className="px-[15px] flex flex-col relative">
                    {false ? (
                        <div className="flex flex-col">
                            <div className="">
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                                    alt=""
                                />
                                <div className="w-[15px] h-[15px] bg-[#111827]"></div>
                            </div>

                            <div class="absolute bottom-0 w-[calc(100%-30px)]">
                                <div className="h-[46px] px-[10px] border-[1px] border-black flex items-center justify-center ">
                                    <div className="font-medium text-[13px]">Chi Tiết</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col relative">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                                alt=""
                            />
                            <div className="absolute bottom-[120px] right-[10px] flex">
                                <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                                <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                            </div>
                            <div>
                                <div className="mt-[20px] mb-[5px] text-[20px] text-ellipsis font-utm_aptima ">
                                    CLOWNZ BASIC SWEAT PANTS
                                </div>
                                <div className="text-[16px]">PANTS & JEANS</div>
                                <div className="font-medium">399.000₫</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
