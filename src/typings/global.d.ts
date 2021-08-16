declare type RouterConfig = {
	path?: string;
	name?: string;
	default?: boolean;
	redirect?: string;
	routes?: RouterConfig[],
	component?: React.FunctionComponent<RouterPageProps> | string 
};
declare type RouterPageProps = React.PropsWithChildren<RouterConfig>
