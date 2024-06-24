import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsuario } from '../actions/usuarioActions';
import { Link } from 'react-router-dom';

function Usuario() {
  const dispatch = useDispatch();
  const usuario = useSelector(state => state.usuario.usuarioAtual);
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    dispatch(fetchUsuario());
  }, [dispatch]);

  const handleEditarPerfil = () => {
    // Implementar a lógica de edição de perfil
    console.log('Editar perfil');
  };

  const handleAdicionarDependente = () => {
    // Implementar a lógica de adicionar dependente
    console.log('Adicionar dependente');
  };

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>Perfil do Usuário</h1>
      <img src={foto || usuario.foto} className="img-fluid rounded-circle" alt="Foto do usuário" />
      <div className="mt-3">
        <p><strong>Nome:</strong> {nome || usuario.nome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <button className="btn btn-primary" onClick={handleEditarPerfil}>Editar Perfil</button>
      </div>
      <h2>Dependentes</h2>
      <ul className="list-group">
        {/* Exibir lista de dependentes do usuário */}
        {usuario.dependentes && usuario.dependentes.map(dependente => (
          <li key={dependente._id} className="list-group-item">{dependente.nome}</li>
        ))}
      </ul>
      <button className="btn btn-success mt-3" onClick={handleAdicionarDependente}>Adicionar Dependente</button>
    </div>
  );
}

export default Usuario;