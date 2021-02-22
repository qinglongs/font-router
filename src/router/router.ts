import './style.less';

class Router {

    routerArr: any = null;
    routerNode: any = null;

    constructor(routes: any) {
        this.routerArr = routes;
        this.routerNode = document.querySelector('#router-list');
    }

    init() {
        const that = this;

        // 渲染内容的节点
        const contentNode = document.querySelector('#content');

        // 渲染路由列表
        that.routerArr.forEach((i: any) => {
            const { path, text } = i;
            const node = document.createElement('li');
            node.setAttribute('router-value', path);
            node.setAttribute('class', 'list-item');

            node.innerHTML = text;

            return that.routerNode.appendChild(node);
        });

        // 初始化执行render
        that.render(contentNode);

        // 监听路由变化
        window.addEventListener('hashchange', function () {
            that.render(contentNode);
        });

        // 监听菜单栏的点击事件改变hash
        that.routerNode.addEventListener('click', function (e: any) {
            if (e.target.getAttribute('class') === 'list-item') {
                window.location.href = `#${e.target.getAttribute('router-value')}`;
            }
        });
    }

    render(rootNode: any) {
        const that = this;

        const newPath = window.location.hash.split('#')[1];

        const findNode = that.routerArr.find((i: any) => i.path === newPath);

        rootNode.innerHTML = findNode?.text || '404';
    }
}

export default Router;
