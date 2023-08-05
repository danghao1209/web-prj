import axios from 'axios';
import { Fragment, useEffect, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { publicRoutes, privateRoutes, nonDefaultLayoutRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import NotFound from '~/pages/NotFound';
import { setLoading, setDataPro } from '~/features/productsAllSlice';
import { pathApi } from './asset/path';

// Import các thành phần cần thiết

function App() {
    const PrivateWrapper = ({ user }) => {
        return true ? <Outlet /> : <Navigate to="/login" />;
    };

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            (async () => {
                dispatch(setLoading(true));
                const result = await axios.get(`${pathApi}/product/all`);
                dispatch(setDataPro(result.data));
                dispatch(setLoading(false));
            })();
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch]);

    return (
        <div className="text-[#3D3D40] w-full">
            <Suspense
                fallback={
                    <div className="lg:px-[50px] lg:mx-[-15px] flex items-center justify-center h-[100vh] w-full">
                        <div className="flex flex-col items-center justify-center w-[200px]">
                            <CircularProgress />
                            <div className="mt-[20px]">Loading ...</div>
                        </div>
                    </div>
                }
            >
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        console.log(route.component);
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

                    {nonDefaultLayoutRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = Fragment;

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
            </Suspense>
        </div>
    );
}

export default App;
