import React from 'react'
import {
  connect
} from 'dva'
import styles from './TodoItem.css'

let classNames = require('classnames/bind')

let cx = classNames.bind(styles)

const TodoItem = ({
  data_key,
  todo,
  dispatch,
  toDos,
  toDos: {
    activeTodoCount
  }
}) => {

  let todos = []
  let iscompleted = todo.iscompleted

  const itemClass = cx('item')

  const btnClass = cx({
    btnbasic: true,
    'iconfont icon-correct': iscompleted
  })

  const textClass = cx({
    textbasic: true,
    textcompletedClass: iscompleted
  })

  const delClass = cx({
    wrong: true,
    'iconfont icon-wrong': true
  })

  const clickButton = (e) => {
    //e.preventDefault()
    // dispatch a request to change the iscompleted->true

    iscompleted = !iscompleted

    dispatch({
      type: `toDos/activeitem`,
      payload: {
        id: todo.id,
        iscompleted: iscompleted
      }
    })
  }

  const onDelete = () => {
    dispatch({
      type: `toDos/deleteItem`,
      payload: {
        data_key: data_key
      }
    })
  }

  return (
    <div className={itemClass}>
      <i className={btnClass} onClick={clickButton}></i>
      <div className={textClass}>{todo.item}</div>
      <i className={delClass} onClick={onDelete}></i>
    </div>
  )
}

/* TodoItem.propTypes = {
  props: propTypes.any
 };*/

const mapStateToProps = ({
  toDos
}) => {
  return {
    toDos
  }
}

export default connect(mapStateToProps)(TodoItem);