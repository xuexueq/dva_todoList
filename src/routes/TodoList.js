import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { 
  Input,
  Form
} from 'antd'

import TodoItem from '../components/TodoItem'

const FormItem = Form.Item

const TodoList = ({
  dispatch,
  toDos,
  form,
  form: {
    getFieldsValue,
    getFieldDecorator
  }
}) => {
  const onPressEnter = () => {
    let payload = getFieldsValue()

    let item = payload.item

    let list = []
    list.push({item:item})

    dispatch({
      type: `toDos/todoAdd`,
      payload: {
        list: list
      }
    })
  }

  return (
    <div>
        <h1>todos</h1>
        <FormItem>
          {getFieldDecorator('item',{
            initialValue: '',
            rules: [{
              required: true,
              message: '请输入待办事项'
            }]
          })(
            <Input
            className="new-todo"
            placeholder="What needs to be done?"
            style = {{width: 200}}
            onPressEnter = {onPressEnter}
            />
          )}
        </FormItem>
        <TodoItem />
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
