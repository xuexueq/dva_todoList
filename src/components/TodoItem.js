import React from 'react'
// import PropTypes from 'prop-types'

const TodoItem = (props) => {
  let { list } = props
  let todos = []

  list.map((item, index) => {
      todos.push(<div key={index}>{item.item}</div>)
  })
  return <div>{todos}</div>

} 

/* TodoItem.propTypes = {
  props: propTypes.any
 };*/

export default TodoItem;
