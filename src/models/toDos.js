
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
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    * todoAdd ({ payload }, { call, put }) {
      yield put({
        type: `addSuccess`,
        payload: {
          list: list
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addSuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
