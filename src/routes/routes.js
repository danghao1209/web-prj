import config from '~/config';
import { lazy } from 'react';

//Layouts
//import { HeaderOnly } from '~/layouts';

//Pages
const Home = lazy(() => import('~/pages/Home'));
const AllProduct = lazy(() => import('~/pages/AllProduct'));
const TopPage = lazy(() => import('~/pages/Top'));
const Product = lazy(() => import('~/pages/Product'));
const Search = lazy(() => import('~/pages/Search'));
const ContactPage = lazy(() => import('~/pages/Contact'));
const Cart = lazy(() => import('~/pages/Cart'));
const Login = lazy(() => import('~/pages/Login'));
const Register = lazy(() => import('~/pages/Register'));
const Profile = lazy(() => import('~/pages/Account/Profile'));
const Orders = lazy(() => import('~/pages/Account/Orders'));
const ChangePassword = lazy(() => import('~/pages/Account/ChangePassword'));
const Addresses = lazy(() => import('~/pages/Account/Addresses'));
const CheckOut = lazy(() => import('~/pages/CheckOut'));
const ForgotPassword = lazy(() => import('~/pages/ForgotPassword'));
const BottomPage = lazy(() => import('~/pages/Bottom'));
const AccessoryPage = lazy(() => import('~/pages/Accessory'));
const TShirtPage = lazy(() => import('~/pages/TShirt'));
const ShirtPage = lazy(() => import('~/pages/Shirt'));
const HoodiePage = lazy(() => import('~/pages/Hoodie'));
const JacketPage = lazy(() => import('~/pages/Jacket'));
const PantsPage = lazy(() => import('~/pages/Pants'));
const ShortsPage = lazy(() => import('~/pages/Shorts'));
const BagPage = lazy(() => import('~/pages/Bag'));
const HatPage = lazy(() => import('~/pages/Hat'));
const OrthersPage = lazy(() => import('~/pages/Orthers'));
const AllSale = lazy(() => import('~/pages/AllSale'));
const AboutPage = lazy(() => import('~/pages/About'));
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
