import createModel from '@/utils/createModel';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const model = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

function *main() {

}

export default createModel(model, main);