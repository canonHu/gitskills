import React, { Component } from 'react'
import { connect } from 'react-redux';
import { gstPosts } from "../actions/action";

class Posts extends Component {

  getHead() {
    this.props.posts();
  }

  render() {
    this.getHead();
    return <div>4</div>;
  }
}

const mapStateToProps = state => ({
  fullName: state.name
});

const mapDispatchToProps = dispatch => ({
  posts: data => dispatch(gstPosts(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
