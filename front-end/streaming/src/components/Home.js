import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConteudos } from '../actions/conteudoActions';
import ConteudoCard from './ConteudoCard';

function Home() {
  const dispatch = useDispatch();
  const conteudos = useSelector(state => state.conteudo.conteudos);

  useEffect(() => {
    dispatch(fetchConteudos());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Aplicacao Streaming</h1>
      <div className="row">
        {conteudos.map(conteudo => (
          <div className="col-md-4" key={conteudo._id}>
            <ConteudoCard conteudo={conteudo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
