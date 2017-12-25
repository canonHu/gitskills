import * as types from '../constants/ActionTypes';

export const addPost = (id, time, title, content, author, category, voteScore, deleteType) => ({
      type: types.ADD_POST,
      id,
      time,
      title,
      content,
      author,
      category,
      voteScore,
      deleteType
    }
  );

export const addPostData = () => dispatch => {
  dispatch(addPost(window.innerHeight, window.innerWidth));

  window.onresize = () => {
    dispatch(addPost(window.innerHeight, window.innerWidth));
  };
};