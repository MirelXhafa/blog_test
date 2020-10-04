function addComment(data) {
  return new Promise((resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(new Error(error));
    }
  });
}

export { addComment };
