import Home from '../pages/Home/Home';
import Intro from '../pages/Intro/Intro';
import Service from '../pages/Service/Services';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';
import ProductList from '../pages/Product/ProductList/ProductList';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Signin from '../pages/Signin/Signin';
import Register from '../pages/Signup/Signup';
import Cart from '../pages/Cart/Cart';
import Pay from '../pages/Pay/Pay';
import Search from '../pages/Search/Search';

import MainLayout from '../layouts/MainLayout/MainLayout';
import OnlyHeader from '../layouts/OnlyHeader/OnlyHeader';

const publicRoutes = [
    { path: '/', component: Home, layout: OnlyHeader, page: '' },
    { path: '/intro', component: Intro, layout: MainLayout, page: 'Giới thiệu' },
    { path: '/service', component: Service, layout: MainLayout, page: 'Dịch vụ' },
    { path: '/news', component: News, layout: MainLayout, page: 'Tin tức' },
    { path: '/contact', component: Contact, layout: MainLayout, page: 'Liên hệ' },
    { path: '/search', component: Search, layout: MainLayout, page: 'Tìm kiếm' },
    { path: '/product/all/', component: ProductList, layout: MainLayout },
    { path: '/product/:id', component: ProductDetails, layout: OnlyHeader },
    { path: '/account/login', component: Signin, layout: OnlyHeader, page: 'Đăng nhập' },
    { path: '/account/register', component: Register, layout: OnlyHeader, page: 'Đăng ký' },
    { path: '/cart', component: Cart, layout: OnlyHeader, page: 'Giỏ hàng' },
    { path: '/pay', component: Pay, layout: null, page: '' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
