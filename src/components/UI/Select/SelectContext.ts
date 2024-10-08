import React, { createContext } from "react";
import {SelectedItem} from "@/components/UI/Select/Select.tsx";



type ISelectContext = {
  selectedItem: SelectedItem,
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>
}

export const SelectContext = createContext<ISelectContext>({
  selectedItem: {
    value: "",
    children: "",
  },
  setSelectedItem: () => {},
});