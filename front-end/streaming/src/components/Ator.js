import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAtor } from '../actions/atorActions';
import { Link } from 'react-router-dom';

function Ator({ match }) {
  const dispatch = useDispatch();
  const atorId = match.params.id;
  const ator = useSelector(state => state.ator.atorAtual);

  useEffect(() => {
    dispatch(fetchAtor(atorId));
  }, [dispatch, atorId]);

  if (!ator) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>{ator.nome}</h1>
      <img src={ator.foto} className="img-fluid rounded-circle mb-3" alt="Foto do ator" />
      <p><strong>Data de Nascimento:</strong> {ator.dataNascimento}</p>
      <p>{ator.biografia}</p>
      <h2>Filmografia</h2>
      <ul className="list-group">
        {ator.filmes.map(filme => (
          <li key={filme._id} className="list-group-item">
            <Link to={`/conteudo/${filme._id}`}>{filme.titulo}</Link>
          </li>
        ))}
        {ator.series.map(serie => (
          <li key={serie._id} className="list-group-item">
            <Link to={`/conteudo/${serie._id}`}>{serie.titulo}</Link>
          </li>
        ))}
        {ator.documentarios.map(documentario => (
          <li key={documentario._id} className="list-group-item">
            <Link to={`/conteudo/${documentario._id}`}>{documentario.titulo}</Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn-secondary mt-3">Voltar</Link>
    </div>
  );
}

export default Ator;
