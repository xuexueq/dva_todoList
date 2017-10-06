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
      history.listen(({ pathname, query }) => {
        if (pathToRegexp(`/`).test(pathname)) {
          let data = localStorage.getItem('list') || ''
          dispatch({
            type: 'updateState',
            payload: {
              list: JSON.parse(data)
            }
          })
        }        
      })      
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
      let data = state.list.filter(function(item, index, array) {
            return (item.iscompleted === false)
      })  

      localStorage.setItem('list',JSON.stringify(data))

      return {
        ...state,
        list: data
      }
    },

    activeitem(state, action) {
        let data = state.list.map(item => item.id == action.payload.id ? {...item,
          iscompleted: action.payload.iscompleted
        } : item)      

        localStorage.setItem('list',JSON.stringify(data))     

        return {
          ...state,
          list: data
        };
    },

    deleteItem(state, action) {
      state.list.splice(action.payload.data_key, 1)

      localStorage.setItem('list',JSON.stringify(state.list))

      return {
        ...state
      }
    },

    applyEdit(state, action) {
        let data = state.list.map(value => value.id == action.payload.id ? {...value,
          item: action.payload.editText
        } : value)

        localStorage.setItem('list',JSON.stringify(data))

        return {
          ...state,
          list: data
        };
    }

  }

};