import React, { Component } from 'react';
import "../less/postComponent.less";
import Comment from './Comment';

class PostComponent extends Component {
  render() {
    return (
        <div className="post">
          <Comment />
        </div>
    );
  }
}

export default PostComponent;