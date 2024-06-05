import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import CommentCard from "../components/CommentCard";
import Navbar from "../components/Navbar";

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
      const response = await axios.post(
        `/active-themes/${themeId}/day/${dayId}/complete`,
        { commentContent: comment },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setComments([...comments, response.data]);
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
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen place-content-center">
      <Navbar
        showLinks={{
          home: false,
          about: false,
          login: false,
          signup: false,
          themeSelection: true,
          logout: true,
          back: true,
        }}
      />
      <div className="pt-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            {themeName} - Day {dayId}
          </h1>
          <p className="text-2xl text-gray-800 mb-4">{day.goal}</p>
          <p className="text-lg text-gray-700 mb-6">{day.description}</p>
          {!day.isCompleted && (
            <button
              onClick={handleComplete}
              className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Mark as Complete
            </button>
          )}
          {day.isCompleted && comments.length === 0 && (
            <button
              onClick={() => setShowCommentBox(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Register your feedback
            </button>
          )}
          {showCommentBox && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                rows="4"
                placeholder="Write your comment here..."
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCommentSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowCommentBox(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {comments.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your feedback</h2>
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
