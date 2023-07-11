import config from '~/config';

//Layouts
//import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import AllProduct from '~/pages/AllProduct';
import Product from '~/pages/Product';
import Search from '~/pages/Search';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Account/Profile';
import Orders from '~/pages/Account/Orders';
import ChangePassword from '~/pages/Account/ChangePassword';
import Addresses from '~/pages/Account/Addresses';
import CheckOut from '~/pages/CheckOut';
import ForgotPassword from '~/pages/ForgotPassword';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.allproducts, component: AllProduct },
    { path: config.routes.product, component: Product },
    { path: config.routes.search, component: Search },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotpassword, component: ForgotPassword },
];

const privateRoutes = [
    { path: config.routes.profile, component: Profile },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.orders, component: Orders },
    { path: config.routes.changepassword, component: ChangePassword },
    { path: config.routes.addresses, component: Addresses },
];

export { publicRoutes, privateRoutes };
