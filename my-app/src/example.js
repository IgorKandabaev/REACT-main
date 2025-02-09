import React from "react";

export const Massage = ({ author, txt }) => {
  return (
    <div>
      <h4>author {author}</h4>
      <p>{txt}</p>
      <p>time: 16:00</p>
    </div>
  );
};
