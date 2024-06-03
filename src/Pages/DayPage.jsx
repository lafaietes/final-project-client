import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../axiosConfig";
import CommentCard from "../components/CommentCard";

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
        console.log("Theme data: ", response.data); // Verificar a resposta da API

        const dayData = response.data.days.find(
          (d) => d.day === parseInt(dayId)
        );
        setDay(dayData);
        setThemeName(response.data.name);
        setComments(dayData.comments || []);
      } catch (error) {
        console.error("Error fetching day data: ", error);
      }
    };

    fetchDay();
  }, [themeId, dayId]);

  const handleComplete = async () => {
    setShowCommentBox(true);
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post(
        `/active-themes/${themeId}/day/${dayId}/complete`,
        { commentContent: comment },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setComments([...comments, { content: comment }]);
      setComment("");
      setShowCommentBox(false);
      navigate(`/theme/${themeId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(`/comments/comment/${commentId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>
        {themeName} - Day {dayId}
      </h1>
      <p>{day.goal}</p>
      <p>{day.description}</p>
      {!day.isCompleted && (
        <button onClick={handleComplete}>Mark as Complete</button>
      )}
      {showCommentBox && (
        <div className="comment-box">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Submit</button>
          <button onClick={() => setShowCommentBox(false)}>X</button>
        </div>
      )}
      <div className="comments">
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            comment={comment}
            onDelete={() => handleCommentDelete(comment._id)}
          />
        ))}
      </div>
      <Link to={`/theme/${themeId}`}>Back to Theme</Link>
    </div>
  );
}

export default DayPage;
