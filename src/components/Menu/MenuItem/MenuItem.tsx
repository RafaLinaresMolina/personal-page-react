import { Tooltip } from "antd";
import { FunctionComponent } from "react";
import { DefaultItem } from "../types";
import "./MenuItem.scss";

interface MenuProps {
  menuItem: DefaultItem[];
}
const MenuItem: FunctionComponent<MenuProps> = ({ menuItem }) => {
  return (
    <div className="menuItem">
      <div className="top">
        {menuItem.map((item) => (
          <Tooltip key={`tool_${item.id}`} title={item.text} placement="right">
            <div
              key={item.id}
              className={`menuItem ${item.active ? "menuItemActive" : ""}`}
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                {" "}
                {item.icon}{" "}
              </a>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
