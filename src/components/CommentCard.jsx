import React, { useState } from "react";

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
    <div className="border border-gray-300 rounded-lg p-2 my-1 relative shadow-sm bg-gray-100 max-w-md">
      {isEditing ? (
        <>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            className="w-full p-1 rounded border border-gray-300 mb-2 text-sm"
          />
          <button onClick={handleUpdate} className="text-blue-500 text-xs mr-1">Submit</button>
        </>
      ) : (
        <p className="text-gray-800 text-sm mb-2">{comment.content}</p>
      )}
      <button onClick={handleEdit} className="absolute top-1 right-10 text-blue-500 text-xs">Edit</button>
      <button onClick={() => onDelete(comment._id)} className="absolute top-1 right-1 text-red-500 text-xs">Delete</button>
    </div>
  );
}

export default CommentCard;
