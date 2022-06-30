// src/context/state.js
import { createContext, useReducer, useContext } from 'react';
import { languages } from '../helpers/Constants';

const AppContext = createContext();

function languageReducer(state, action) {
  switch (action.type) {
    case 'setLanguage': {
      let lang = languages.filter(x => x.name === action.value)[0];
      return { language: lang }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(languageReducer, { language: languages[0] });
  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };