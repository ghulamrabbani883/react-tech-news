import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
//Context creation
//Data provider
//Consumer has been reduced, Now we will use ContextAPi
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "html",
  nbpages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchNews = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      //Calling or fetching data
      const res = await fetch(url);
      //converting to json data
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: { hits: data.hits, nbpages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeItem = (postId)=>{
    dispatch({type:"REMOVE_POST",payload:postId})
  }
  const ItemChange = (search_query)=>{
    dispatch({type:"SEARCH_QUERY",payload:search_query})
  }
  const changePage = ()=>{
    dispatch({type:"CHANGE_PAGE",payload:state.page})
  }
  const getNextPage = ()=>{
    dispatch({type:"GET_NEXT_PAGE"})
  }
  const getPrevPage = ()=>{
    dispatch({type:"GET_PREV_PAGE"})
  }
  useEffect(() => {
    fetchNews(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{ ...state,removeItem,ItemChange,changePage,getPrevPage, getNextPage }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
