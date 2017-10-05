import React, {
  Component
} from 'react';
import ReactDom from 'react-dom'
import {
  connect
} from 'dva'
import styles from './TodoItem.css'

let classNames = require('classnames/bind')

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: this.props.todo.item,
      dispatch: this.props.dispatch
    }
  }

  changeEditState() {
    this.setState({
      isEditing: true
    })
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      editText: e.target.value
    });

  }

  handleSubmit(e) {
    let val = this.state.editText.trim();
    if (val) {
      // dispatch save
      console.log(val)
      this.setState({
        isEditing: false
      })
    }
  }


  handleKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({
        editText: this.props.todo.item,
        isEditing: false
      });
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event);
    }

    this.props.dispatch({
      type: `toDos/applyEdit`,
      payload: {
        editText: this.state.editText,
        id: this.props.todo.id
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isEditing && this.state.isEditing) {
      let node = ReactDom.findDOMNode(this.refs.editField);
      node.focus();
      //console.log(node.value)
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  render() {
    const {
      data_key,
      todo,
      dispatch,
      toDos,
      toDos: {
        activeTodoCount
      }
    } = this.props;

    let cx = classNames.bind(styles)
    let todos = []
    let iscompleted = todo.iscompleted

    const itemClass = cx('item')

    const btnClass = cx({
      btnbasic: true,
      'iconfont icon-correct': iscompleted
    })

    let editClass = cx({
      edit: true,
      'show': this.state.isEditing
    })

    const textClass = cx({
      textbasic: true,
      textcompletedClass: iscompleted
    })

    const delClass = cx('wrong', 'iconfont icon-wrong')

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
        <div className={textClass} onDoubleClick={this.changeEditState.bind(this)} >{todo.item}</div>
        <input type="text" ref="editField" 
          className={editClass} 
          value={this.state.editText} 
          onBlur={this.handleSubmit.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onChange={this.handleChange.bind(this)}/>
        <i className={delClass} onClick={onDelete}></i>
      </div>
    )

  }
}

// const TodoItem = ({
//   data_key,
//   todo,
//   dispatch,
//   toDos,
//   toDos: {
//     activeTodoCount
//   }
// }) => {

//   let todos = []
//   let iscompleted = todo.iscompleted

//   const itemClass = cx('item')

//   const btnClass = cx({
//     btnbasic: true,
//     'iconfont icon-correct': iscompleted
//   })

//   const textClass = cx({
//     textbasic: true,
//     textcompletedClass: iscompleted
//   })

//   const delClass = cx({
//     wrong: true,
//     'iconfont icon-wrong': true
//   })

//   const clickButton = (e) => {
//     //e.preventDefault()
//     // dispatch a request to change the iscompleted->true
//     iscompleted = ! iscompleted  

//     dispatch({
//       type: `toDos/activeitem`,
//       payload: {
//         id: todo.id,
//         iscompleted: iscompleted
//       }
//     })
//   }

//   const onDelete = () => {
//     dispatch({
//       type: `toDos/deleteItem`,
//       payload: {
//         data_key: data_key
//       }
//     })
//   }

//   return (
//     <div className={itemClass}>
//       <i className={btnClass} onClick={clickButton}></i>
//       <div className={textClass}>{todo.item}</div>
//       <input className={editClass} />
//       <i className={delClass} onClick={onDelete}></i>
//     </div>
//   )
// }

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