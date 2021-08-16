import { createSagaSlice } from "@/typings/createSagaSlice";
import { createAction, createSlice } from "@reduxjs/toolkit"
import { takeLatest } from "redux-saga/effects";
import createModel from "./createModel"

const create: createSagaSlice = ({ effects = {}, ...rest }) => {
	return createModel(createSlice(rest), function *main() {
		const entities = Object.entries(effects);
		for(const [key, value] of entities) {
			const actionString = `${rest.name as string}/${key}`;
			const action = createAction(actionString);
			yield takeLatest(action, value as any);
		}
	})
}

export default create;