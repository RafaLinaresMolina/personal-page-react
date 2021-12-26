import { ReactNode } from "react";
import MenuItem from "./MenuItem/MenuItem";
import { DefaultItem } from "./types";
import "./Menu.scss";

interface MenuProps {
  children?: ReactNode | undefined;
  menuItem: DefaultItem[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ menuItem }) => {
  return (
    <div className="menu">
      <MenuItem menuItem={menuItem} />
    </div>
  );
};

export default Menu;
