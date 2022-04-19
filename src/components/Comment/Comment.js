import React from "react";

const Comment = ({ item }) => {
  const { content, id, user } = item;

  return (
    <article className={`comment comment--${id}`}>
      <div className="comment__author">
        <img
          className="comment__author__image"
          alt={`${user.name} profile pic`}
          // src={user.image}
          src="./assets/users/image-anne.jpg"
        />
        <div className="comment__author__text">
          <div className="comment__author__text__name">{user.name}</div>
          <div className="comment__author__text__handle">@{user.username}</div>
        </div>
      </div>
      <div className="comment__content">{content}</div>
    </article>
  );
};

export default Comment;
