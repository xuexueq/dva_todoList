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
  dispatch,
  location,
  toDos,
  toDos: {
    list
  },
  form,
  form: {
    getFieldsValue,
    getFieldDecorator
  }
}) => {
  const {
    pathname,
    query
  } = location

  const entercompleted = pathToRegexp(`/completed`).test(pathname)

  const onPressEnter = () => {
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
      dispatch({
        type: `toDos/updateState`,
        payload: {
          //list: list
        }
      })
    }
  }

  /*  if(entercompleted){  
      dispatch({
        type:  `toDos/entercompleted`,
        payload: {
        }
      })
  }*/


  let todos = list.map(function(item, index) {
    return <TodoItem todo={item} data_key={index} key={index+1}/>
  })

  return (

    <div className={styles.todos}>
      <h1 style={{marginBottom: '10px',textAlign: 'center'}}>todos</h1>
        <Card style = {{padding: '40px 40px 0 40px'}}>
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
        <div>
          {todos}
        </div>
        <Link to = {'/completed'}>activecompleted</Link>
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