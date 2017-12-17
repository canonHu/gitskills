export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

const post = {
  id: "",
  time: new Date(),
  title: "",
  content: "",
  author: "",
  category: "",
  voteScore: 0,
  deleteType: false
};

const actions = {
  addPost(id) {
      type: ADD_POST, id;
  }
};

export default actions;