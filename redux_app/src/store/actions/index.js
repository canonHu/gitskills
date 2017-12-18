export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

// const actions = {
//   addPost({
//     id,
//     time,
//     title,
//     content,
//     author,
//     category,
//     voteScore,
//     deleteType
//   }) {
//     return {
//       ype: ADD_POST,
//       id,
//       time,
//       title,
//       content,
//       author,
//       category,
//       voteScore,
//       deleteType
//     }
//   }
// };

const actions = {
  addPost(payload) {
    return {
      type: ADD_POST,
      payload
    };
  }
};

export default actions;