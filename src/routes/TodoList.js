import React from 'react'
import {
  connect
} from 'dva'
import {
  Link
} from 'dva/router'
import pathToRegexp from 'path-to-regexp'

import styles from './TodoList.css'
import {
  Card,
  Input,
  Form
} from 'antd'

import TodoItem from '../components/TodoItem'
import Footer from '../components/Footer'

const uniqid = require('uniqid')
const FormItem = Form.Item

const TodoList = ({
  location,
  dispatch,
  toDos,
  toDos: {
    list
  },
  form,
  form: {
    resetFields,
    getFieldsValue,
    getFieldDecorator
  }
}) => {
  const {
    pathname,
    query
  } = location

  const onPressEnter = (value) => {
      let payload = getFieldsValue()

      let item = payload.item
      let iscompleted = false

      if (item.trim()) {
        const id = uniqid();
        list.push({
          item: item,
          iscompleted: false,
          id: id
        })

      localStorage.setItem('list',JSON.stringify(list))
/*      let data = JSON.parse(localStorage.getItem('list')) 
      console.log('localStorage', data)*/

        dispatch({
          type: `toDos/updateState`,
          payload: {
            //list: list
          }
        })
      }

      resetFields()
    }

  const onDeleteAllCompleted = () => {
/*    let data = list.filter(function(item, index, array) {
          return (item.iscompleted === false)
    })  

    localStorage.setItem('list',JSON.stringify(data))*/

    dispatch({
      type: `toDos/deleteAllCompleted`,
      payload: {
        //list: data
      }
    })
  }

  let todos = []
  if (list.length) {
    let showList = list.filter((value) => {
      switch (pathname){
        case '/active': return value.iscompleted === false
        case '/completed': return value.iscompleted === true
        default: return true
      }
    })

    todos = showList.map(function(item, index) {
      return <TodoItem todo={item} data_key={index} key={index+1}/>
    })
  }

  let footer
  if (list.length) {
    footer = <Footer list={list} onDeleteAllCompleted={onDeleteAllCompleted}/>
  }
  return (

    <div className={styles.todos}>
      <h1 style={{marginBottom: '10px',textAlign: 'center'}}>todos</h1>
        <Card className={styles.card}>
        <FormItem>
          {getFieldDecorator('item',{
            initialValue: ''
          })(
            <Input
            className="new-todo"
            placeholder="What needs to be done?"
            style = {{width: '100%'}}
            onPressEnter = {onPressEnter}
            />
          )}
        </FormItem>
        {todos}
        {footer}
        </Card>
    </div>

  );
}

TodoList.propTypes = {};

const mapStateToProps = ({
  toDos
}) => {
  return {
    toDos
  }
}

export default connect(mapStateToProps)(Form.create()(TodoList));