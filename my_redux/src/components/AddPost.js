import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddPost extends Component {

  render () {
    return <div>
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
      </div>;
  }
}

export default AddPost;