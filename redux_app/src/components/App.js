import React, { Component } from 'react';
import '../less/App.less';
import PostList from "./PostList";
import { addPost  } from "../store/actions";

class App extends Component {
  render() {
    console.log(addPost);
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
