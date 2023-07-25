import { useSelector } from 'react-redux';

import Product from '~/components/Product';
import NavbarAllPro from '~/components/NavbarAllPro';

function ProductPage() {
    const { dataProAll } = useSelector((state) => state.productsAll);
    return (
        <div className="lg:px-[50px] lg:mx-[-15px]">
            <NavbarAllPro />
            <div className="grid grid-cols-2 gap-y-[50px] lg:grid-cols-4 lg:gap-y-[50px]">
                {console.log(dataProAll?.products)}
                {dataProAll?.products?.length !== 0 ? (
                    dataProAll?.products?.map((product) => {
                        return <Product product={product} />;
                    })
                ) : (
                    <div>Chưa có sản phẩm nào.</div>
                )}
            </div>
        </div>
    );
}

export default ProductPage;
