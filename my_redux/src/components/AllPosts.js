import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from "../actions/action";

class Posts extends Component {
  componentDidMount() {
    this.getHead()
  }

  getHead() {
    this.props.posts();
  }

  render() {
    console.log(this.props)
    return <div>4</div>;
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  posts: data => getData(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
