import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext([])

export const GlobalContextProvider = ({children}) => {
  const [globalState, setGlobalState] = useState([])

  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}