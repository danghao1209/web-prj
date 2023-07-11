import { useSelector } from 'react-redux';

import Product from './Product';
import NavbarAllPro from './NavbarAllPro';

function ProductPage() {
    const { dataProAll } = useSelector((state) => state.productsAll);

    const path = 'http://localhost:1209/';

    return (
        <div className="lg:px-[50px] lg:mx-[-15px]">
            <NavbarAllPro />
            <div className="grid grid-cols-2 gap-y-[50px] lg:grid-cols-4 lg:gap-y-[50px]">
                {dataProAll?.products?.length !== 0 ? (
                    dataProAll.products.map((product) => {
                        return <Product product={product} path={path} />;
                    })
                ) : (
                    <div>Chưa có sản phẩm nào.</div>
                )}
            </div>
        </div>
    );
}

export default ProductPage;
