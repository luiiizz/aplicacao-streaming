import axios from 'axios';
import { ATOR_FETCH_SUCCESS, ATOR_FETCH_REQUEST } from '../constants/ActionTypes';

export const fetchAtor = (atorId) => {
  return dispatch => {
    dispatch({ type: ATOR_FETCH_REQUEST });

    return axios.get(`/api/atores/${atorId}`)
      .then(response => {
        const ator = response.data;
        dispatch({ type: ATOR_FETCH_SUCCESS, ator });
      })
      .catch(error => {
        console.error('Erro ao buscar ator:', error);
        dispatch({ type: ATOR_FETCH_REQUEST }); // Limpar o estado de carregamento
      });
  };
};
