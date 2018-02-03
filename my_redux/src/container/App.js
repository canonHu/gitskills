import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters,
  posts
} from "../actions/action";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import AddPost from "../components/AddPost";
import AllPosts from "../components/AllPosts";

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AllPosts getPosts={() => dispatch(posts())} />
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(completeTodo(index))}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
        />
        <AddPost onPostClick={text => dispatch(posts(text))} />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  visibilityFilter: PropTypes.oneOf([
    "SHOW_ALL",
    "SHOW_COMPLETED",
    "SHOW_ACTIVE"
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return;
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);
