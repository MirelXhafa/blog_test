import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  CREATE_POST,
  CREATE_POST_FAILED,
  CREATE_POST_SUCCESS,
  GET_POST,
  GET_POST_FAILED,
  GET_POST_SUCCESS,
  EDIT_POST,
  EDIT_POST_FAILED,
  EDIT_POST_SUCCESS,
} from "../constants";
import { createPost, editPost, getPost, getPosts } from "../../services/posts";

function getPostsAction() {
  return (dispatch) => {
    dispatch({
      type: GET_POSTS,
    });

    getPosts()
      .then((response) => {
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POSTS_FAILED,
          error: error,
        });
      });
  };
}

function createPostAction(data) {
  return (dispatch) => {
    dispatch({
      type: CREATE_POST,
    });

    createPost(data)
      .then((response) => {
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_POST_FAILED,
          error: error,
        });
      });
  };
}

function getPostAction(postId) {
  return (dispatch) => {
    dispatch({
      type: GET_POST,
    });

    getPost(postId)
      .then((response) => {
        dispatch({
          type: GET_POST_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POST_FAILED,
          error: error,
        });
      });
  };
}

function editPostAction(data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_POST,
    });

    editPost(data)
      .then((response) => {
        dispatch({
          type: EDIT_POST_SUCCESS,
          payload: response,
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_POST,
          error: err,
        });
      });
  };
}

export { getPostsAction, createPostAction, getPostAction, editPostAction };
