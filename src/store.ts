import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import models from "@/models";

export default createStore({
	initialState: {},
	enhancers: [],
	extensions: [getSagaExtension()],
},
	...Object.values(models).map(getModel => getModel())
);