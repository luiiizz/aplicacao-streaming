import React from 'react';
import { Link } from 'react-router-dom';

function ConteudoCard({ conteudo }) {
  return (
    <div className="card">
      <img src={conteudo.capa} className="card-img-top" alt={conteudo.titulo} />
      <div className="card-body">
        <h5 className="card-title">{conteudo.titulo}</h5>
        <p className="card-text">{conteudo.categoria}</p>
        <Link to={`/conteudo/${conteudo._id}`} className="btn btn-primary">Ver detalhes</Link>
      </div>
    </div>
  );
}

export default ConteudoCard;
