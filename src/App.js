import { Fragment, useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import { publicRoutes, privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    const PrivateWrapper = ({ user }) => {
        return user ? <Outlet /> : <Navigate to="/login" />;
    };

    const [user, setUser] = useState({});

    useEffect(() => {
        let token = localStorage.getItem('tokenUser');
        if (token) {
            const fetchInfo = async () => {
                const resultFetch = await axios.post(
                    'http://localhost:1209/api/info',
                    {},
                    {
                        headers: {
                            Authorization: token,
                            'Content-Type': 'application/json',
                        },
                    },
                );
                setUser(resultFetch.data.data);
            };

            try {
                fetchInfo();
            } catch (error) {
                console.log(error.message);
            }
        }
    }, []);
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
                        <Route key={index} element={<PrivateWrapper user={user} />}>
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
