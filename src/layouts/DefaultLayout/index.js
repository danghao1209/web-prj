import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import React from 'react';
function DefaultLayout({ children }) {
    return (
        <div className="w-full relative">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Header />
            </div>
            <div className="mt-[60px] mx-auto">
                <div className={''}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
