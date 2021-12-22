import { DownOutlined, FolderOpenFilled } from "@ant-design/icons";
import { FunctionComponent } from "react";
import { DefaultItem } from "../Menu/types";
import "./DirTree.scss";

interface DirTreeProps {
  fileTreeItems: DefaultItem[];
}

const DirTree: FunctionComponent<DirTreeProps> = ({ fileTreeItems }) => {
  return (
    <div className="parentDir">
      <span className="dirTitle">
        <DownOutlined /> <span className="sansSerifFont">PERSONALPAGE</span>
      </span>
      <div className="documentsTree">
        <span>
          <DownOutlined /> <span className="itemFolderIcon"><FolderOpenFilled/></span> project
        </span>

        <div className="childDir">
          {fileTreeItems.map((item) => (
            <div key={item.id}
              className={`item treeLine ${item.active ? "treeLineActive" : ""}`}
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
