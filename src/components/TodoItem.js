
import React from 'react'
import { connect } from 'dva'

const TodoItem = ({
  todo,
  dispatch,
  toDos,  
}) => {
  //console.log('item',todo)

  let todos = []
  const buttonStyle={position:"absolute",left:"0",top:'0',width:"30px",height:"30px",backgroundColor:"pink"};
  const completedbuttonStyle={position:"absolute",left:"0",top:'0',width:"30px",height:"30px",backgroundColor:"red"};

  const textStyle = {position:"absolute",left:"40px",fontWeight:'bold'}
  const completedtextStyle = {position:"absolute",left:"40px",fontStyle:'italic',textDecoration:'line-through',color:'#d9d9d9'}

  const clickButton = (e)=>{
    //e.preventDefault()
    // dispatch a request to change the iscompleted->true
    let iscompleted = todo.iscompleted
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
      <div style={todo.iscompleted? completedbuttonStyle :buttonStyle} onClick={clickButton}></div>
      <div style={todo.iscompleted? completedtextStyle :textStyle}>{todo.item}</div>
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
