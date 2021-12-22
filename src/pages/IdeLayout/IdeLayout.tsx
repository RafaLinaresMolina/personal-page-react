import { FunctionComponent } from "react";
import { DefaultItem } from "../../components/Menu/types";
import {
  BranchesOutlined,
  FileMarkdownFilled,
  FileOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import "./IdeLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Menu from "../../components/Menu/Menu";
import DirTree from "../../components/DirTree/DirTree";
import DisplayFile from "../../components/DisplayFile/DisplayFile";
import Footer from "../../components/Footer/Footer";

const markdownIcon = <FileMarkdownFilled className="itemFileIcon" />;

const asideItems: Array<DefaultItem> = [
  { id: "treeFile", icon: <FileOutlined />, active: true },
  {
    id: "linkedIn",
    icon: <LinkedinFilled />,
    active: false,
    text: "Find me on LinkedIn",
  },
  {
    id: "github",
    icon: <BranchesOutlined />,
    active: false,
    text: "Watch a bit of code",
  },
];

const fileTreeItems: Array<DefaultItem> = [
  { id: "home", icon: markdownIcon, active: true, text: "home.md" },
  { id: "cv", icon: markdownIcon, active: false, text: "curriculum.md" },
  { id: "contact", icon: markdownIcon, active: false, text: "contact.md" },
];

const IdeLayout: FunctionComponent = () => {
  return (
    <div className="ideGlobal">
      <Sidebar>
        <Menu menuItem={asideItems}></Menu>
        <DirTree fileTreeItems={fileTreeItems}></DirTree>
        <DisplayFile fileTabs={fileTreeItems} />
      </Sidebar>
      <Footer />
    </div>
  );
};

export default IdeLayout;
