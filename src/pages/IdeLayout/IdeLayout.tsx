import { FunctionComponent } from "react";
import { DefaultItem, DefaultPages } from "../../components/Menu/types";
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
import { PayloadPages } from "../../redux/types/pages";
import { setActivePage } from "../../redux/actions/pages";
import { useDispatch } from "react-redux";
import "./mediaQueries.scss";

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

const fileTreeItems: Array<DefaultPages> = [
  { id: "home", icon: markdownIcon, active: true, text: "home.md" },
  {
    id: "curriculum",
    icon: markdownIcon,
    active: false,
    text: "curriculum.md",
  },
  { id: "contact", icon: markdownIcon, active: false, text: "contact.md" },
];

const IdeLayout: FunctionComponent = () => {
  const dispatch = useDispatch();

  const changePage = async (id: keyof PayloadPages) => {
    const newPageState = setActivePage(id);
    await dispatch(newPageState);
  };

  const checkIfTabIsActive = (
    pageState: PayloadPages,
    tabId: keyof PayloadPages
  ) => {
    return pageState[tabId];
  };

  return (
    
    <div className="ideGlobal">
      <Sidebar>
        <Menu menuItem={asideItems}></Menu>
        <DirTree
          fileTreeItems={fileTreeItems}
          changePage={changePage}
          checkIfTabIsActive={checkIfTabIsActive}
        ></DirTree>
      </Sidebar>
      <DisplayFile
        fileTabs={fileTreeItems}
        changePage={changePage}
        checkIfTabIsActive={checkIfTabIsActive}
      />
      <Footer />
    </div>
  );
};

export default IdeLayout;
