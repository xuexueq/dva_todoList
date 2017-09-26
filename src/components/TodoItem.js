import React from 'react'
// import PropTypes from 'prop-types'

const TodoItem = (props) => {
  let { list } = props
  let todos = []
//let item=props.refs.item

    list.map((item, index) => {
        todos.push(
          <div style={{position:"relative",height: '20px',marginTop:'5px'}}>
            <div style={{position:"absolute",left:"0",top:'0',width:"20px",height:"20px",backgroundColor:"pink"}}></div>
            <div style={{position:"absolute",left:"25px"}} key={index}>{item.item}</div>
          </div>
        )
    })
    return <div>{todos}</div>
  }

/* TodoItem.propTypes = {
  props: propTypes.any
 };*/

export default TodoItem;
