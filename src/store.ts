import { combineReducers, configureStore } from "@reduxjs/toolkit";

interface Token {
  token: string | null;
}

interface Action {
  type: 'LOGIN' | 'LOGOUT';
  payload: string;
}

const initialState: Token = {
  token: null,
};

const tokenReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

function makeStore() {
  return configureStore({
    reducer: combineReducers({
      token: tokenReducer,
    }),
  });
}

export const store = makeStore();
