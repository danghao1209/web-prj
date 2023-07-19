import config from '~/config';

//Layouts
//import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import AllProduct from '~/pages/AllProduct';
import TopPage from '~/pages/Top';
import Product from '~/pages/Product';
import Search from '~/pages/Search';
import ContactPage from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Account/Profile';
import Orders from '~/pages/Account/Orders';
import ChangePassword from '~/pages/Account/ChangePassword';
import Addresses from '~/pages/Account/Addresses';
import CheckOut from '~/pages/CheckOut';
import ForgotPassword from '~/pages/ForgotPassword';
import BottomPage from '~/pages/Bottom';
import AccessoryPage from '~/pages/Accessory';
import TShirtPage from '~/pages/TShirt';
import ShirtPage from '~/pages/Shirt';
import HoodiePage from '~/pages/Hoodie';
import JacketPage from '~/pages/Jacket';
import PantsPage from '~/pages/Pants';
import ShortsPage from '~/pages/Shorts';
import BagPage from '~/pages/Bag';
import HatPage from '~/pages/Hat';
import OrthersPage from '~/pages/Orthers';
import AllSale from '~/pages/AllSale';
import AboutPage from '~/pages/About';
//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.allproducts, component: AllProduct },

    { path: config.routes.top, component: TopPage },
    { path: config.routes.bottom, component: BottomPage },
    { path: config.routes.accessory, component: AccessoryPage },
    { path: config.routes.about, component: AboutPage },
    { path: config.routes.tshirt, component: TShirtPage },
    { path: config.routes.shirt_polo, component: ShirtPage },
    { path: config.routes.hoodie, component: HoodiePage },
    { path: config.routes.jacket, component: JacketPage },
    { path: config.routes.pants, component: PantsPage },
    { path: config.routes.shorts, component: ShortsPage },
    { path: config.routes.bag, component: BagPage },
    { path: config.routes.hat, component: HatPage },
    { path: config.routes.others, component: OrthersPage },
    { path: config.routes.allsale, component: AllSale },

    { path: config.routes.product, component: Product },
    { path: config.routes.search, component: Search },
    { path: config.routes.contact, component: ContactPage },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotpassword, component: ForgotPassword },
];

const privateRoutes = [
    { path: config.routes.profile, component: Profile },
    { path: config.routes.orders, component: Orders },
    { path: config.routes.changepassword, component: ChangePassword },
    { path: config.routes.addresses, component: Addresses },
];
const nonDefaultLayoutRoutes = [{ path: config.routes.checkout, component: CheckOut }];

export { publicRoutes, privateRoutes, nonDefaultLayoutRoutes };
