import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className={''}>
            <Header />
            <div className={''}>
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
