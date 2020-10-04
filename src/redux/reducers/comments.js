import {
  ADD_COMMENT,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_SUCCESS,
} from "../constants";

const initialState = {
  comment: [],
};

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, loading: true };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comment: [...state.comment, action.payload],
        loading: false,
      };
    case ADD_COMMENT_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default commentsReducer;
