import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from "../actions/action";

class Posts extends Component {

  getHead() {
    this.props.posts();
  }

  render() {
    console.log(this.props)
    // this.getHead()
    return <div>4</div>;
  }
}

const mapStateToProps = state => ({
  fullName: ''
});

const mapDispatchToProps = dispatch => ({
  posts: data => dispatch(getData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
