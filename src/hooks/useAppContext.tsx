import { createContext, useContext } from "react";
import { TContextProps } from "../context/AppContext";

export const CONTEXT = createContext({} as TContextProps);

export const useAppContext = () => {
  return useContext(CONTEXT);
};
