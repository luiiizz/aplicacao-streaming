import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConteudo, playConteudo } from '../actions/conteudoActions';
import { Link } from 'react-router-dom';

function Conteudo({ match }) {
  const dispatch = useDispatch();
  const conteudoId = match.params.id;
  const conteudo = useSelector(state => state.conteudo.conteudoAtual);
  const [isReproduzindo, setIsReproduzindo] = useState(false);

  useEffect(() => {
    dispatch(fetchConteudo(conteudoId));
  }, [dispatch, conteudoId]);

  const handlePlay = () => {
    dispatch(playConteudo(conteudoId));
    setIsReproduzindo(true);
  };

  if (!conteudo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>{conteudo.titulo}</h1>
      <img src={conteudo.capa} className="img-fluid" alt={conteudo.titulo} />
      <p>{conteudo.sinopse}</p>
      <div className="d-flex justify-content-between">
        <p><strong>Categoria:</strong> {conteudo.categoria}</p>
        <p><strong>Ano:</strong> {conteudo.ano}</p>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-secondary">Voltar</Link>
        {isReproduzindo ? (
          <button className="btn btn-primary" onClick={() => setIsReproduzindo(false)}>Pausar</button>
        ) : (
          <button className="btn btn-primary" onClick={handlePlay}>Reproduzir</button>
        )}
      </div>
      {/* Aqui você pode implementar o player de vídeo */}
    </div>
  );
}

export default Conteudo;
