import {
  ADD_POST_VALUE,
  POST_LOADING,
  CLEAR_POST_VALUE,
  CLEAR_POST,
  CLEAR_POSTS,
  GET_POST,
  GET_ERRORS
} from './actionTypes';

export const addPostValue = data => dispatch => {
  dispatch({
    type: ADD_POST_VALUE,
    payload: data
  });
};
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
export const clearInputPost = () => dispatch => {
  dispatch({ type: CLEAR_POST_VALUE });
};
export const clearCurrentPost = () => dispatch => {
  dispatch({
    type: CLEAR_POST
  });
};
export const clearListPosts = () => dispatch => {
  dispatch({
    type: CLEAR_POSTS
  });
};
export const deletePost = () => dispatch => {
  if (window.confirm('Are you sure?')) {
    // axios
    //   .delete('./api/profile')
    //   .then(res =>
    //     dispatch({
    //       type: GET_POST,
    //       payload: {}
    //     })
    //   )
    //   .catch(err =>
    //     dispatch({
    //       type: GET_ERRORS,
    //       payload: err.response.data
    //     })
    //   );
  }
};
