
export default {

  namespace: 'toDos',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * todoAdd ({ payload}, { call, put }) {
      yield put({
        type: `addSuccess`,
        payload: {
          list: payload.list
        }
      })
    }
  },

  reducers: {
    addSuccess(state, action) {
      return { ...state, ...action.payload.list };
    },
  },

};
