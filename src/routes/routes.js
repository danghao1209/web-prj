import config from '~/config';

//Layouts
//import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import AllProduct from '~/pages/AllProduct';
import Product from '~/pages/Product';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.allproducts, component: AllProduct },
    { path: config.routes.product, component: Product },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
