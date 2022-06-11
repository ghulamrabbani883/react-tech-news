const reducer = (state, action) => {
  switch (action.type) {
    case "GET_NEXT_PAGE":
      if(state.page >= state.nbpages){
        state.page = 0;
      }
      return {
        ...state,
        page: state.page +1,
      };
    case "GET_PREV_PAGE":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
        
      }
      return {
        ...state,
        page: pageNum,
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curPost) => curPost.objectID !== action.payload
        ),
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbpages: action.payload.nbpages,
      };
  }
  return state;
};

export default reducer;
