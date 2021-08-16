export default (slice: any, saga: any) => () => {
	return {
		id: slice.name,
		reducerMap: {
			[slice.name]: slice.reducer
		},
		sagas: [saga]
	}
}