
import React from 'react'
import { connect } from 'dva'

const TodoItem = ({
  todo,
  dispatch,
  toDos,  
}) => {
  //console.log('item',todo)

  let todos = []
  const buttonStyle={position:"absolute",left:"0",top:'0',width:"20px",height:"20px",backgroundColor:"pink"};
  const completedStyle={position:"absolute",left:"0",top:'0',width:"20px",height:"20px",backgroundColor:"red"};
  const clickButton = (e)=>{
    e.preventDefault()
    // dispatch a request to change the iscompleted->true
    let iscompleted = todo.iscompleted
    iscompleted = ! iscompleted
    dispatch({
      type:`toDos/updateState`,
      payload: {
        id:todo.id,
        iscompleted: iscompleted
      }
    })
  }
  return (
    <div style={{position:"relative",height: '20px',marginBottom:'5px'}}>
      <div style={todo.iscompleted? completedStyle :buttonStyle} onClick={clickButton}></div>
      <div style={{position:"absolute",left:"25px"}}>{todo.item}</div>
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
