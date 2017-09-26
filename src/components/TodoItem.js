import React from 'react';

const TodoItem = props => {
  const {list} = props;

  const todos = [];

  list.length && list.map((todo, index) => {
    todos.push(<div key={index}>{todo.item}</div>);
  });

  return <div>{todos}</div>;
};

// TodoItem.propTypes = {
// };

// const mapStateToProps = ({toDos}) => {
//   return {
//     toDos
//   }
// }

export default TodoItem;
