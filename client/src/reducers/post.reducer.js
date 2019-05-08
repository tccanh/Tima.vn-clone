import {
  CLEAR_POST_VALUE,
  ADD_POST_VALUE,
  POST_LOADING,
  GET_POSTS,
  GET_POST,
  CLEAR_POST,
  CLEAR_POSTS,
  SET_POST
} from '../actions/actionTypes';
const initialState = {
  temp: {},
  post: null,
  posts: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_POST_VALUE:
      return {
        ...state,
        temp: null
      };
    case ADD_POST_VALUE:
      return {
        ...state,
        temp: { ...payload },
        loading: false
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case CLEAR_POST:
      return {
        ...state,
        post: null
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: {}
      };

    default:
      return state;
  }
};
