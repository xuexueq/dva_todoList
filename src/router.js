import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TodoList from './routes/TodoList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TodoList} />
         <Route path="/completed" exact component={TodoList} />       
      </Switch>
    </Router>
  );
}

export default RouterConfig;
