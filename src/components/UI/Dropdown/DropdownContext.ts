import { createContext, Dispatch, SetStateAction } from "react";



type IDropdownContext = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>,
  toggle: HTMLButtonElement | null,
  seToggle: Dispatch<SetStateAction< HTMLButtonElement | null>>,
}

export const DropdownContext = createContext<IDropdownContext>({
  show: false,
  setShow: () => {},
  toggle: null,
  seToggle: () => {},
});