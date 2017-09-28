
import React from 'react'
import { connect } from 'dva'
import styles from './TodoList.css'
import { 
  Input,
  Form
} from 'antd'

import TodoItem from '../components/TodoItem'

const FormItem = Form.Item

const TodoList = ({
  dispatch,
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
  const onPressEnter = (e) => {
    let payload = getFieldsValue()

    let item = payload.item
    let iscompleted = false
    let list = []

    if(item){
      list.push({item:item,iscompleted:false})          
    }

    dispatch({
      type: `toDos/todoAdd`,
      payload: {
        list: list
      }
    })


  
  }

  let todos=list.map(function(item, index){
    return <TodoItem todo={item} key={index+1}/>
  })
  return (
    <div className={styles.todos}>
        <h1 style={{marginBottom: '10px'}}>todos</h1>
        <FormItem>
          {getFieldDecorator('item',{
            initialValue: ''
          })(
            <Input
            className="new-todo"
            placeholder="What needs to be done?"
            style = {{width: 200}}
            onPressEnter = {onPressEnter}
            />
          )}
        </FormItem>
        <div>
          {todos}
        </div>
    </div>
  );
}

TodoList.propTypes = {
};

const mapStateToProps = ({toDos}) => {
  return {
    toDos
  }
}

export default connect(mapStateToProps)(Form.create()(TodoList));
