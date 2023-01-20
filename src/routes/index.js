import Home from '../pages/Home';
import Intro from '../pages/Intro';

import MainLayout from '../layouts/MainLayout/MainLayout';

const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/intro', component: Intro, layout: MainLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
