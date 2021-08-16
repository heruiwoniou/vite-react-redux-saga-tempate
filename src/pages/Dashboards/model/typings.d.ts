import 'react-redux';

declare namespace model {
	export interface DashboardsState {
		list: { id: number, text: string }[]
	}
}

declare module 'react-redux' { 
	export interface DefaultRootState {
		dashboards: model.DashboardsState
	}
}