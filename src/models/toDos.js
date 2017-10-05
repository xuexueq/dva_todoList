import {
  hashHistory
} from 'dva/router'
import {
  parse,
  stringify
} from 'qs'
import pathToRegexp from 'path-to-regexp'

export default {

  namespace: 'toDos',

  state: {
    list: [{
      item: 'drink water',
      iscompleted: false,
      id: 384975
    }, {
      item: 'wash clothes',
      iscompleted: true,
      id: 565354
    }]
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
      return {
        ...state,
        ...action.payload
      };
    },
    
    deleteAllCompleted(state, action) {
      return {
        ...state,
        list: state.list.filter(function(item, index, array) {
          return (item.iscompleted === false)
        })
      }
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
    },

    applyEdit(state, action) {
      return {
        ...state,
        list: state.list.map(value => value.id == action.payload.id ? {...value,
          item: action.payload.editText
        } : value)
      };
    }

  }

};