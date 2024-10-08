import React, {useEffect, useRef, useState} from 'react';
import {Dropdown} from "@/components/UI/Dropdown";
import {SelectContext} from "@/components/UI/Select/SelectContext.ts";



export type SelectedItem = {
  value: any;
  children: React.ReactNode;
}

interface SelectProps {
  children?: React.ReactNode,
  onChange?: (value: string) => void,
  placeholder?: string;
}

function Select({children, onChange = () => {}, placeholder = ""}: SelectProps) {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    value: "",
    children: placeholder
  });
  const firstUpdate = useRef(true);


  useEffect(() => {
    if (!firstUpdate.current) {
      onChange(selectedItem.value);
    }
    firstUpdate.current = false;
  }, [selectedItem.value]);


  return (
    <SelectContext.Provider value={{selectedItem, setSelectedItem}}>
      <Dropdown>
        {children}
      </Dropdown>
    </SelectContext.Provider>
  );
}

export default Select;