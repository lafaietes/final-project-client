import React, { useState } from "react";
import "./CommentCard.css";

function CommentCard({ comment, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(comment._id, editedComment);
    setIsEditing(false);
  };

  return (
    <div className="comment-card">
      {isEditing ? (
        <>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={handleUpdate}>Submit</button>
        </>
      ) : (
        <p>{comment.content}</p>
      )}
      <button onClick={handleEdit} className="edit-button">Edit</button>
      <button onClick={() => onDelete(comment._id)} className="delete-button">Delete</button>
    </div>
  );
}

export default CommentCard;
