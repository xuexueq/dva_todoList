import React from 'react'
// import PropTypes from 'prop-types'

const TodoItem = (props) => {
  let { todo } = props
  let todos = []
  const buttonStyle={position:"absolute",left:"0",top:'0',width:"20px",height:"20px",backgroundColor:"pink"};
  const completedStyle={position:"absolute",left:"0",top:'0',width:"20px",height:"20px",backgroundColor:"red"};
  const clickButton = (e)=>{
    // dispatch a request to change the iscompleted->true
    console.log(todo.iscompleted)
  }
  return (
    <div style={{position:"relative",height: '20px',marginTop:'5px'}}>
      <div style={todo.iscompleted? completedStyle :buttonStyle} onClick={clickButton}></div>
      <div style={{position:"absolute",left:"25px"}}>{todo.item}</div>
    </div>
  )          
}

/* TodoItem.propTypes = {
  props: propTypes.any
 };*/

export default TodoItem;
