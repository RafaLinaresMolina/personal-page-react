import { ReactNode } from "react";
import { DefaultItem } from "../types";
import "./MenuItem.scss";

interface MenuProps {
  children?: ReactNode | undefined;
  menuItem: DefaultItem[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ menuItem }) => {
  return (
    <div className="top">
      {menuItem.map((item) => (
        <div key={`menuItem_${item.id}`} className={`menuItem ${item.active ? "menuItemActive" : ""}`}>
          <a className="icon" href={item?.url} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
