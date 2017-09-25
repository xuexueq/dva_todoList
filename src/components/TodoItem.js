import React from 'react';

const TodoItem = (props) => {
  const { list } = props;
  if (list.length) {
    const todos = [];

    list.map((todo, index) => {
      todos.push(<div key={index}>{todo.item}</div>);
    });

    return <div>{todos}</div>;
  } else {
    return <div> 还没有代办事项</div>;
  }
};

// TodoItem.propTypes = {
// };

// const mapStateToProps = ({toDos}) => {
//   return {
//     toDos
//   }
// }

export default TodoItem;
