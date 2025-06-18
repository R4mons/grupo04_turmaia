import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";


function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-box">
        <h2 className="error-title">Erro 404 - Página não encontrada</h2>

        <img
          src="https://pbs.twimg.com/media/D5WRpP2WwAEq3gC.png"
          alt="Tangela triste"
          className="error-image"
        />

        <p className="error-author">Criado por Arthur e Bernardo</p>
        <Link to="/main" className="error-button">
          Ir para página inicial
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
