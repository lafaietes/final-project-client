import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Componente para exibir e editar um comentário
function CommentCard({ comment, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false); // Estado para verificar se está no modo de edição
  const [editedComment, setEditedComment] = useState(comment.content); // Estado para o conteúdo editado do comentário

  const handleEdit = () => {
    setIsEditing(true); // Ativa o modo de edição
  };

  const handleUpdate = () => {
    onUpdate(comment._id, editedComment); // Chama a função de atualização com o conteúdo editado
    setIsEditing(false); // Desativa o modo de edição
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white relative transition-transform transform hover:scale-105 hover:shadow-lg text-center">
      {isEditing ? (
        <>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)} // Atualiza o estado conforme o usuário digita
            className="w-full p-2 border border-gray-300 rounded-lg mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Edit your comment..."
          />
          <div className="flex justify-center space-x-2 mt-2">
            <button
              onClick={handleUpdate}
              className="text-emerald-700 text-xs hover:text-emerald-900"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)} // Cancela a edição
              className="text-gray-500 text-xs hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-800 text-sm mb-2">{comment.content}</p>
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              onClick={handleEdit}
              className="text-emerald-700 text-xs hover:text-emerald-900"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              onClick={() => onDelete(comment._id)} // Chama a função de exclusão
              className="text-gray-500 text-xs hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CommentCard;
