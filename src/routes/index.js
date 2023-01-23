import Home from '../pages/Home';
import Intro from '../pages/Intro';

import MainLayout from '../layouts/MainLayout/MainLayout';
import OnlyHeader from '../layouts/OnlyHeader/OnlyHeader';

const publicRoutes = [
    { path: '/', component: Home, layout: OnlyHeader },
    { path: '/intro', component: Intro, layout: MainLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
