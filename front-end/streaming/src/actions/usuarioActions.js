import axios from 'axios';
import { USUARIO_FETCH_SUCCESS, USUARIO_FETCH_REQUEST } from '../constants/ActionTypes';

export const fetchUsuario = () => {
  return dispatch => {
    dispatch({ type: USUARIO_FETCH_REQUEST });

    return axios.get('/api/usuario')
      .then(response => {
        const usuario = response.data;
        dispatch({ type: USUARIO_FETCH_SUCCESS, usuario });
      })
      .catch(error => {
        console.error('Erro ao buscar usuário:', error);
        dispatch({ type: USUARIO_FETCH_REQUEST }); // Limpar o estado de carregamento
      });
  };
};
