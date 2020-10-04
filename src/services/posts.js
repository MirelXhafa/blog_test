import configureStore from "../redux/store";
import uniqid from "uniqid";
import { find } from "lodash";

const { store } = configureStore();

function getPosts() {
  return new Promise((resolve, reject) => {
    try {
      let posts = store.getState().posts.list;

      if (posts.length > 0) {
        resolve(posts);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(new Error(error));
    }
  });
}

function createPost(payload) {
  return new Promise((resolve, reject) => {
    try {
      let data = {
        id: uniqid(),
        ...payload,
      };

      resolve(data);
    } catch (error) {
      reject(new Error(error));
    }
  });
}

function getPost(postId) {
  return new Promise((resolve, reject) => {
    try {
      let posts = store.getState().posts.list;

      let post = find(posts, (o) => {
        return o.id === postId;
      });

      if (post) {
        resolve(post);
      }

      resolve({});
    } catch (error) {
      reject(new Error(error));
    }
  });
}

function editPost(data) {
  return new Promise((resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(new Error(error));
    }
  });
}

export { getPosts, createPost, getPost, editPost };
