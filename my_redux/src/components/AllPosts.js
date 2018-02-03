import React, { Component } from 'react'
import PropTypes from "prop-types";

class Posts extends Component {
  state = { head: [] };

  componentWillMount() {
    this.setState(state => {
        head: this.getHead();
    });
  }

  getHead() {
    this.props.getPosts();
  }

  render() {
    console.log(this.getHead());
    return <div>4</div>;
  }
}

export default Posts;

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired
};
