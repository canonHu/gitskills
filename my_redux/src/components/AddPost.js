import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddPost extends Component {
  handleClick(e) {
    this.props.onPostClick('text');
  }

  render() {
    return (
      <div>
        <div>
          <label>id：</label>
          <input />
        </div>
        <div>
          <label>timestamp：</label>
          <input />
        </div>
        <div>
          <label>title：</label>
          <input />
        </div>
        <div>
          <label>body：</label>
          <input />
        </div>
        <div>
          <label>author：</label>
          <input />
        </div>
        <div>
          <label>category：</label>
          <input />
        </div>
        <div>
          <label>voteScore：</label>
          <input />
        </div>
        <div>
          <label>deleted：</label>
          <input />
        </div>
        <button onClick={e => this.handleClick(e)}>click</button>
      </div>
    );
  }
}

export default AddPost;

AddPost.propTypes = {
  onPostClick: PropTypes.func.isRequired
};