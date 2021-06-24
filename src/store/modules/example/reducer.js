import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // eslint-disable-next-line no-console
      console.log('success');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      // eslint-disable-next-line no-console
      console.log('deu errro');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      // eslint-disable-next-line no-console
      console.log('fazendo requisição');
      return state;
    }
    default:
      return state;
  }
}
