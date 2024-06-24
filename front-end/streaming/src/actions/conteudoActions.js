import axios from 'axios';
import { CONTEUDO_FETCH_SUCCESS, CONTEUDO_FETCH_REQUEST } from '../constants/ActionTypes';

export const fetchConteudo = (conteudoId) => {
  return dispatch => {
    dispatch({ type: CONTEUDO_FETCH_REQUEST });

    return axios.get(`/api/conteudos/${conteudoId}`)
      .then(response => {
        const conteudo = response.data;
        dispatch({ type: CONTEUDO_FETCH_SUCCESS, conteudo });
      })
      .catch(error => {
        console.error('Erro ao buscar conteúdo:', error);
        dispatch({ type: CONTEUDO_FETCH_REQUEST }); // Limpar o estado de carregamento
      });
  };
};
