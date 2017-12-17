import React, { Component } from 'react';
import '../less/App.less';
import PostList from "./PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
