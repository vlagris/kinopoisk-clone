import {DropdownMenu} from "@/components/UI/Dropdown";
import {DropdownMenuProps} from "@/components/UI/Dropdown/components/DropdownMenu/DropdownMenu.tsx";


interface SelectMenuProps extends DropdownMenuProps {
}

function SelectMenu(props: SelectMenuProps) {
  return (
    <DropdownMenu {...props}/>
  );
}

export default SelectMenu;