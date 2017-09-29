
import React from 'react'
import { connect } from 'dva'
import styles from './TodoItem.css'

let classNames = require('classnames/bind')

let cx = classNames.bind(styles)

const TodoItem = ({
  todo,
  dispatch,
  toDos,  
}) => {
  let todos = []
  let iscompleted = todo.iscompleted

  const btnClass = cx(
    'btnbasic',
    {
      iconfont: iscompleted
    }
  )

  const textClass = cx(
    'textbasic',
    {
      textcompletedClass: iscompleted
    }
    )

  const clickButton = (e)=>{
    //e.preventDefault()
    // dispatch a request to change the iscompleted->true

    iscompleted = ! iscompleted
  
    dispatch({
      type:`toDos/activeitem`,
      payload: {
        id:todo.id,
        iscompleted: iscompleted
      }
    })
  }
  return (
    <div style={{position:"relative",height: '30px',marginBottom:'7px',fontSize:'20px'}}>
      <i className = {btnClass} onClick={clickButton}>&#xe600;</i>
      <div className = {textClass}>{todo.item}</div>
    </div>
  )          
}

/* TodoItem.propTypes = {
  props: propTypes.any
 };*/

 const mapStateToProps = ({toDos}) => {
  return {
    toDos
  }
}

export default connect(mapStateToProps)(TodoItem);
