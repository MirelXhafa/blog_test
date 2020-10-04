import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import postsReducer from "./posts";
import errorReducer from "./error";
import loadingReducer from "./loading";
import commentsReducer from "./comments";

const rootReducer = (history) =>
  combineReducers({
    posts: postsReducer,
    error: errorReducer,
    loading: loadingReducer,
    comments: commentsReducer,
    router: connectRouter(history),
  });

export default rootReducer;
