
export default {

  namespace: 'toDos',

  state: {
    list: [{
      item:'drink water',
      iscompleted:false,
      id:'123sqw'
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
      return {
        ...state,
        list:state.list.map(todo=>todo.id==action.payload.id?
          {...todo,iscompleted:action.payload.iscompleted}:
          todo
        )
      }
    }
  },

};
