import Router from './router/router';

import './style.less';

const routerArr = [
    { path: '/a', text: 'a先擦十大' },
    { path: '/b', text: 'b页面' },
    { path: '/c', text: 'c' },
    { path: '/d', text: 'ddddd' },
    { path: '/e', text: 'eeee' },
];

window.addEventListener('DOMContentLoaded', function () {
    const myRouter = new Router(routerArr);
    myRouter.init();
});
