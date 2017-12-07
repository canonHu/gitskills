import React, { Component } from 'react';
import { Button } from 'antd';
import './App.less';
import Comment from "./components/Comment";
import PostComponent from "./components/PostComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostComponent />
        <Comment />
      </div>
    );
  }
}

export default App;
