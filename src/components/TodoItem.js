import React from 'react';
import { connect } from 'dva'

const TodoItem = ({
	dispatch,
	toDos,
	toDos: {
		list
	}

}) => {
	list.map((item,key) =>{
		return <div>{item.item}</div>
	})
};

TodoItem.propTypes = {
};

const mapStateToProps = ({toDos}) => {
  return {
    toDos
  }
}

export default connect(mapStateToProps)(TodoItem)
