import React, { createContext } from "react";
import {SelectedItem} from "./SelectModal.tsx";



type ISelectModalContext = {
  selectedItem: SelectedItem,
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>
}

export const SelectModalContext = createContext<ISelectModalContext>({
  selectedItem: {
    value: "",
    children: "",
  },
  setSelectedItem: () => {},
});

