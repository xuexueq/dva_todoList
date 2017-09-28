
export default {

  namespace: 'toDos',

  state: {
    list: [{
      item:'drink water',
      iscompleted:false
    }]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
  },


  reducers: {
    todoAdd(state, action) {
      return { ...state, ...action.payload};
    },
    updateState(state, action) {
      return { ...state, ...action.payload};
    }
  },

};
