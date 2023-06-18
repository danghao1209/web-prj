import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { setLoading, setDataPro } from '~/features/productsAllSlice';
import Product from './Product';
import NavbarAllPro from './NavbarAllPro';

function ProductPage() {
    const { dataPro, isLoading } = useSelector((state) => state.productsAll);
    const dispatch = useDispatch();

    const path = 'http://localhost:1209/';

    useEffect(() => {
        try {
            (async () => {
                dispatch(setLoading(true));
                const result = await axios.get(`${path}api/product/all`);
                dispatch(setDataPro(result.data));
                dispatch(setLoading(false));
            })();
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="px-[50px] mx-[-15px]">
                <div className="flex items-center justify-center">
                    <CircularProgress color="inherit" />
                </div>
            </div>
        );
    }

    return (
        <div className="px-[50px] mx-[-15px]">
            <NavbarAllPro />
            <div className="grid grid-cols-4 gap-y-[50px]">
                {console.log(dataPro)}
                {dataPro.length !== 0 ? (
                    dataPro.products.map((product) => {
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
