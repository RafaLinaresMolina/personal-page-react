import { FunctionComponent, ReactNode } from "react";
import "./Sidebar.scss";

interface SidebarProps {
    children?: ReactNode | undefined;
}
 
const Sidebar: FunctionComponent<SidebarProps> = ({children}) => {
    return ( <div className="sidebar">{children}</div> );
}
 
export default Sidebar;