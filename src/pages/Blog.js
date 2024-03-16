import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  // Variable en react on utilise le state
  const [content, setcontent] = useState("");
  const [error, setError] = useState(false);

  // empécher le formulaire par default de recherger la pages inutilement !
  const handleSubmit = (e) => {
    e.prenventDefault();

    if (content.length < 20) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation></Navigation>
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          // ajoute de style conditionnel
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChangeCapture={(e) => setcontent(e.target.value)}
        ></textarea>
        {/* champs conditionnel  */}
        {error && <span>Veuillez entrer un minimum de 20 caractère</span>}
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Blog;
