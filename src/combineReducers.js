export default function combineReducers(reducers) {
  function cloneState(prev) {
    return Object.keys(reducers).reduce((next, key) => {
      next[key] = prev[key];
      return next;
    }, {});
  }

  function reducer(prev, action) {
    const post = action.post;
    if (reducers[post]) {
      const newPost = reducers[post](prev[post], action);
      if (newPost !== prev[post]) {
        const next = cloneState(prev);
        next[post] = newPost;

        return next;
      }
    }

    return prev;
  }
  return reducer;
}
