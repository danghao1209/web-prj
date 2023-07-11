import axios from 'axios';
import { Fragment, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { publicRoutes, privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import NotFound from '~/pages/NotFound';
import { setLoading, setDataPro } from '~/features/productsAllSlice';

// Import các thành phần cần thiết
const path = 'http://localhost:1209/';

function App() {
    const PrivateWrapper = ({ user }) => {
        return true ? <Outlet /> : <Navigate to="/login" />;
    };

    const { dataProAll, isLoading } = useSelector((state) => state.productsAll);
    const dispatch = useDispatch();

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
        <div className="text-[#3D3D40] w-full">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route key={index} element={<PrivateWrapper />}>
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        </Route>
                    );
                })}

                <Route
                    path="*"
                    element={
                        <DefaultLayout>
                            <NotFound />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
