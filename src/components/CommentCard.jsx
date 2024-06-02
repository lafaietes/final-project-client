import React from "react";

function CommentCard({ comment, onDelete }) {
  return (
    <div className="comment-card">
      <p>{comment.content}</p>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default CommentCard;
