import axios from "axios";
import React, { useState } from "react";

const Article = ({ article }) => {
  //   const { isEditing, setIsEditing } = useState(false);
  //   const { editContent, setEditContent } = useState("");
  const [isEditing, setIsEditing] = useState(false); // Correction ici
  const [editContent, setEditContent] = useState(""); // Correction ici

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return newDate;
  };

  const handleEdit = () => {
    const data = {
      // Correction de la syntaxe ici
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      updatedDate: Date.now(),
    };

    axios.put("http://localhost:3001/articles/" + article.id, data).then(() => {
      setIsEditing(false);
    });
  };

  const handledelete = () => {
    axios.delete("http://localhost:3001/articles/" + article.id);
    window.location.reload();
  };
  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateFormater(article.date)} </em>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={article.content}
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{article.content}</p>
      )}
      <div className="btn-container">
        {/* condition du btn a l édition */}
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button> // Correction du texte du bouton
        ) : (
          <button onClick={() => setIsEditing(true)}>Editer</button> // Correction ici aussi
        )}
        <button
          onClick={() => {
            if (window.confirm("Voulez vous vraiment Suprimer cet article ?")) {
              handledelete();
            }
          }}
        >
          {" "}
          Suprimer
        </button>
      </div>
    </div>
  );
};

export default Article;
