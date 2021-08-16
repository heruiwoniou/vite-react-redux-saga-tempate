import { Action, AnyAction, CreateSliceOptions, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit";

declare type CaseEffect<A extends Action = AnyAction> = (action: A) => void

declare interface CreateSagaSliceOptions<State = any, CR extends SliceCaseReducers<State> = SliceCaseReducers<State>, Name extends string = string> extends CreateSliceOptions<State, CR, Name> {
	effects?: {
		[key: string]: CaseEffect<PayloadAction<any>>
	}
}
declare type createSagaSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(options: CreateSagaSliceOptions<State, CaseReducers, Name>) => () => {
	id: any;
	reducerMap: {
		[x: string]: any;
	};
	sagas: any[];
};