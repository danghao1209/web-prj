import { useSelector } from 'react-redux';

import Product from '~/components/Product';
import NavbarAllPro from '~/components/NavbarAllPro';
import { pathApi } from '~/asset/path';
import { useEffect, useState } from 'react';
import _ from 'lodash';

function AccessoryPage() {
    const [data, setData] = useState();
    const { dataProAll } = useSelector((state) => state.productsAll);
    useEffect(() => {
        const filteredArray = _.filter(
            dataProAll.products,
            { category: 'Hat' },
            { category: 'Bag&Backpack' },
            { category: 'Orthers' },
        );
        setData(filteredArray);
        console.log(filteredArray);
    }, [dataProAll.products]);

    return (
        <div className="lg:px-[50px] lg:mx-[-15px]">
            <NavbarAllPro />
            {data?.length !== 0 ? (
                <div className="grid grid-cols-2 gap-y-[50px] lg:grid-cols-4 lg:gap-y-[50px]">
                    {data?.map((product) => {
                        return <Product product={product} path={pathApi} />;
                    })}
                </div>
            ) : (
                <div className="my-[200px] flex items-center justify-center w-full">
                    <div className="text-[20px]">Chưa có sản phẩm nào.</div>
                </div>
            )}
        </div>
    );
}

export default AccessoryPage;
