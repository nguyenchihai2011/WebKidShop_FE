import Home from '../pages/Home';
import Intro from '../pages/Intro';
import Service from '../pages/Service/Service';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';
import ProductAll from '../pages/Product/Product';
import Login from '../pages/Login/Login';

import MainLayout from '../layouts/MainLayout/MainLayout';
import OnlyHeader from '../layouts/OnlyHeader/OnlyHeader';

const publicRoutes = [
    { path: '/', component: Home, layout: OnlyHeader },
    { path: '/intro', component: Intro, layout: MainLayout, page: 'Giới thiệu' },
    { path: '/service', component: Service, layout: MainLayout, page: 'Dịch vụ' },
    { path: '/news', component: News, layout: MainLayout, page: 'Tin tức' },
    { path: '/contact', component: Contact, layout: MainLayout, page: 'Liên hệ' },
    { path: '/product/all', component: ProductAll, layout: MainLayout },
    { path: '/account/login', component: Login, layout: OnlyHeader },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
