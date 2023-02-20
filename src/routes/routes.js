import config from '~/config';

//Layouts
//import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Product },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
