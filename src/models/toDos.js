export default {

  namespace: 'toDos',

  state: {
    list: [],
    activeTodoCount: 0
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
    },
  },

  effects: {},


  reducers: {
    updateState(state, action) {
      return {...state,
        ...action.payload
      };
    },
    activeitem(state, action) {
      return {
        ...state,
        list: state.list.map(item => item.id == action.payload.id ? {...item,
          iscompleted: action.payload.iscompleted
        } : item)
      };
    },

    deleteItem(state, action) {
      state.list.splice(action.payload.data_key, 1)
      return {
        ...state
      }
    }

  }

};