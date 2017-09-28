
export default {

  namespace: 'toDos',

  state: {
    list: [],
    iscompleted: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
  },


  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload};
    },
    activeitem(state, action) {
      return {
        ...state,
        list:state.list.map(todo=>todo.id==action.payload.id?
          {...todo,iscompleted:action.payload.iscompleted}:
          todo
        )
      };
    }
  },

};
