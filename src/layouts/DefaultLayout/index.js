import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import React from 'react';
function DefaultLayout({ children }) {
    return (
        <div className="w-full">
            <Header />
            <div className={'mt-[60px]'}>
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
