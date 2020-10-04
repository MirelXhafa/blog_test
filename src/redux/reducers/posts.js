import { findIndex } from "lodash";
import {
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  GET_POST,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILED,
} from "../constants";

const initialState = {
  list: [],
  post: {},
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, list: [...action.payload] };
    case GET_POSTS_FAILED:
      return { ...state, loading: false };
    case CREATE_POST:
      return { ...state, loading: true };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case CREATE_POST_FAILED:
      return { ...state, loading: false, error: action.error };
    case GET_POST:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return { ...state, loading: false, post: action.payload };
    case GET_POST_FAILED:
      return { ...state, loading: false, error: action.error };
    case EDIT_POST:
      return { ...state, loading: false };
    case EDIT_POST_SUCCESS:
      let postIndex = findIndex(state.list, (o) => {
        return o.id === action.payload.id;
      });

      state.list[postIndex] = action.payload;
      return { ...state, loading: false, list: [...state.list] };
    case EDIT_POST_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default postsReducer;
