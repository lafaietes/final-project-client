import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import CommentCard from "../components/CommentCard";
import Navbar from "../components/Navbar";

// Página para exibir e gerenciar um dia específico de um tema
function DayPage() {
  const { themeId, dayId } = useParams();
  const [day, setDay] = useState({});
  const [themeName, setThemeName] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDay = async () => {
      try {
        const response = await axios.get(`/active-themes/${themeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const dayData = response.data.days.find(
          (d) => d.day === parseInt(dayId)
        );
        setDay(dayData); // Define o estado com os dados do dia
        setThemeName(response.data.name); // Define o estado com o nome do tema
        setComments(dayData.comments || []); // Define o estado com os comentários do dia
      } catch (error) {
        console.error("Error fetching day data: ", error);
      }
    };

    fetchDay();
  }, [themeId, dayId]);

  const handleComplete = async () => {
    setShowCommentBox(true); // Exibe a caixa de comentário
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(
        `/active-themes/${themeId}/day/${dayId}/complete`,
        { commentContent: comment },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setComments([...comments, response.data]); // Adiciona o novo comentário à lista de comentários
      setComment(""); // Limpa o campo de comentário
      setShowCommentBox(false); // Oculta a caixa de comentário
      navigate(`/theme/${themeId}`); // Navega de volta para a página do tema
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(`/comments/comment/${commentId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setComments(comments.filter((comment) => comment._id !== commentId)); // Remove o comentário da lista
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentUpdate = async (commentId, newContent) => {
    try {
      const response = await axios.put(
        `/comments/comment/${commentId}`,
        { content: newContent },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setComments(
        comments.map((comment) =>
          comment._id === commentId ? response.data : comment
        )
      ); // Atualiza o comentário na lista
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center place-content-center">
      <Navbar
        showLinks={{
          logout: true,
          back: true,
        }}
      />
      <div className="pt-20 px-6 max-w-4xl w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl text-center">
          <h1 className="text-4xl font-bold text-emerald-700 mb-6">
            {themeName} - Day {dayId}
          </h1>
          <p className="text-2xl text-gray-800 mb-4">{day.goal}</p>
          <p className="text-lg text-gray-700 mb-6">{day.description}</p>
          {!day.isCompleted && (
            <button
              onClick={handleComplete}
              className="bg-emerald-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-900 transition-colors duration-300"
            >
              Mark as Complete
            </button>
          )}
          {day.isCompleted && comments.length === 0 && (
            <button
              onClick={() => setShowCommentBox(true)}
              className="bg-emerald-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-900 transition-colors duration-300"
            >
              Register your feedback
            </button>
          )}
          {showCommentBox && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                rows="4"
                placeholder="Register your feedback here. How do you feel about this activities? What did you learn today?"
              />
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleCommentSubmit}
                  className="bg-emerald-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-900 transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowCommentBox(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {comments.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your feedback
              </h2>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <CommentCard
                    key={comment._id}
                    comment={comment}
                    onDelete={handleCommentDelete}
                    onUpdate={handleCommentUpdate}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DayPage;
