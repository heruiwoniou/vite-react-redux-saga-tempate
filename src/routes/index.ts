import LayoutBase from '@/layouts/base';

const resolve = (p: string) => `../../${p}`;

const routes: RouterConfig[] = [
	{
		path: '/',
		name: 'root',
		component: LayoutBase,
		default: true,
		redirect: '/home',
		routes: [
			{
				path: 'home',
				name: 'home',
				component: resolve('pages/Home')
			}, {
				path: 'dashboards',
				name: 'dashboards',
				component: resolve('pages/Dashboards')
			}]
	},
	{
		path: 'login',
		name: 'login',
		component: resolve('pages/Login')
	},
];

export default routes;