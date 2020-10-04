const initialState = {
  error: "",
};

function errorReducer(state = initialState, action) {
  const { error } = action;

  if (error) return { error: error };

  return state;
}

export default errorReducer;
