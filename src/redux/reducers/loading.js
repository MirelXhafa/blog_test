const initialState = {
  loading: false,
};

function loadingReducer(state = initialState, action) {
  const { loading } = action;

  if (loading) return { loading: loading };

  return state;
}

export default loadingReducer;
