import React, { createContext } from "react";
import {SelectElementsType} from "@/components/UI/Dropdown/Dropdown.tsx";



type IDropdownContext = {
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  elements: SelectElementsType,
  setElements: React.Dispatch<React.SetStateAction<SelectElementsType>>
}

export const DropdownContext = createContext<IDropdownContext>({
  show: false,
  setShow: () => {},
  elements: {},
  setElements: () => {},
});