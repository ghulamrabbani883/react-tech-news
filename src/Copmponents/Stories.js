import React from "react";
import { useGlobalContext } from "../Context";
import "./stories.css";

const Stories = () => {
  const { hits, isLoading,removeItem } = useGlobalContext();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div className="card-div">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;
          return (
            <div className="card" key={objectID}>
              <div className="cardTitle">
                <h2 className="title">{title}</h2>
              </div>
              <div className="cardInfo">
                <p>
                  By <span className="author">{author}</span> Comments :{" "}
                  <span className="comments">{num_comments}</span>
                </p>
              </div>
              <div className="cardButton">
                <div className="left">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Read More...
                  </a>
                </div>
                <div className="right" onClick={()=>removeItem(objectID)}>
                  <a>Remove</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Stories;
