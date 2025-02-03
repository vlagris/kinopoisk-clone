import {useEffect, useRef, useState, ReactNode} from 'react';
import {Dropdown} from "@/components/UI/Dropdown";
import {SelectContext} from "@/components/UI/Select/SelectContext.ts";



export type SelectedItem = {
  value: any;
  children: ReactNode;
}

interface SelectProps {
  children?: ReactNode,
  className?: string,
  onChange?: (value: string) => void,
  placeholder?: string;
}

function Select({children, className, onChange = () => {}, placeholder = ""}: SelectProps) {
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
      <Dropdown className={className}>
        {children}
      </Dropdown>
    </SelectContext.Provider>
  );
}

export default Select;