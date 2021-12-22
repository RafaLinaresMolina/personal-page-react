import { FunctionComponent } from "react";
import {BranchesOutlined } from "@ant-design/icons";
import "./Footer.scss";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return (  
    <div className="footer"> 
    <BranchesOutlined />
      <span className="sansSerifFont footerText">master</span>
    
  </div> );
}
 
export default Footer;