import { addComment } from "../../services/comments";
import {
  ADD_COMMENT,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_SUCCESS,
} from "../constants";

function addCommentAction(data) {
  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
    });

    addComment(data)
      .then((response) => {
        dispatch({
          type: ADD_COMMENT_SUCCESS,
          payload: response,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_COMMENT_FAILED,
          error: err,
        });
      });
  };
}

export { addCommentAction };
