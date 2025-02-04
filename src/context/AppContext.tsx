import { PropsWithChildren } from "react";
import { CONTEXT } from "../hooks/useAppContext";

export interface TContextProps {
  show: boolean;
}

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const show: boolean = false;
  return <CONTEXT.Provider value={{ show }}>{children}</CONTEXT.Provider>;
};
