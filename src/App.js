import { Fragment } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    const PrivateWrapper = ({ user }) => {
        return true ? <Outlet /> : <Navigate to="/login" />;
    };

    return (
        <div className="text-[#3D3D40]">
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
            </Routes>
        </div>
    );
}

export default App;
