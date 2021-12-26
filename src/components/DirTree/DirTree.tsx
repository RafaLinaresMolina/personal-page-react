import { DownOutlined, FolderOpenFilled } from "@ant-design/icons";
import { FunctionComponent } from "react";
import { useTypedSelector } from "../../redux/hook";
import { PayloadPages } from "../../redux/types/pages";
import { DefaultPages } from "../Menu/types";
import "./DirTree.scss";

interface DirTreeProps {
  fileTreeItems: DefaultPages[];
  changePage: (id: keyof PayloadPages) => Promise<void>;
  checkIfTabIsActive: (
    pageState: PayloadPages,
    tabId: keyof PayloadPages
  ) => boolean;
}

const DirTree: FunctionComponent<DirTreeProps> = ({ fileTreeItems, changePage, checkIfTabIsActive }) => {
  const pageState = useTypedSelector((state) => state);

  return (
    <div className="parentDir">
      <span className="dirTitle">
        <DownOutlined /> <span className="sansSerifFont">PERSONALPAGE</span>
      </span>
      <div className="documentsTree">
        <span>
          <DownOutlined />{" "}
          <span className="itemFolderIcon">
            <FolderOpenFilled />
          </span>{" "}
          project
        </span>

        <div className="childDir">
          {fileTreeItems.map((item) => (
            <div
              key={item.id}
              onClick={() => changePage(item.id)}
              className={`item treeLine ${
                checkIfTabIsActive(pageState, item.id) ? "treeLineActive" : ""
              }`}
            >
              <div>
                {item.icon} {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirTree;
