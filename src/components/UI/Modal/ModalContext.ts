import { createContext } from "react";

type IModalContext = {
  show: boolean,
  onClose: () => void,
}

export const ModalContext = createContext<IModalContext>({
  show: false,
  onClose: () => {},
});