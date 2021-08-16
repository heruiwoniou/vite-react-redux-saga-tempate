import createSagaSlice from '@/utils/createSagaSlice';
import { call, put } from 'redux-saga/effects';

function delay({ ms = 1000, result = {} }) {
  return new Promise(resolve => setTimeout(() => resolve(result), ms))
}

const initialState = {
  list: [{
    id: 1, text: 'test'
  }]
}

export default createSagaSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    add(state) {
      const id = state.list[state.list.length - 1].id + 1;
      state.list.push({ id, text: 'test' + id })
    },
    reduce(state) {
      state.list.pop();
    }
  },
  effects: {
    *asyncAdd() {
      yield call(delay, { ms: 1000 });
      yield put({ type: 'dashboards/add' });
      yield put({ type: 'dashboards/asyncReduce' });
    },
    *asyncReduce() {
      yield call(delay, { ms: 1000 });
      yield put({ type: 'dashboards/reduce' });
    }
  }
});