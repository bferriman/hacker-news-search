const initialState = {
  searches: []
};

const searchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      const updatedSearches = [...state.searches];
      updatedSearches.unshift(action.params);
      return { ...state, searches: updatedSearches};

    default:
      return state;
  }
};

export default searchesReducer;