import { FunctionComponent } from "react";
import Entry from "../Entry/Entry";
import Quote from "../Quote/Quote";
import { Content, isEntry, isQuote, PageType } from "./types";
import "./Page.scss";
import { useTypedSelector } from "../../redux/hook";

interface PageProps {
  pages?: PageType[];
}

const checkContent = (content: Content, id: string) => {
  if (isQuote(content)) {
    return <Quote key={`Quote_${id}`} quote={content.quote} author={content.author} />;
  }
  if (isEntry(content)) {
    return <Entry key={`Entry_${id}`} entry={content} />;
  }
};

const Page: FunctionComponent<PageProps> = ({ pages }) => {
  const pageState = useTypedSelector((state) => state);
  return (
    <div className="files">
      {pages?.map((page) => (
        <div key={page.id} className="file" style={{display: pageState[page.id] ? "flex" : "none"}}>
          <h1 className="entryTitle">{page.title}</h1>
          {page.content.map((content) => checkContent(content, page.id))}
        </div>
      ))}
    </div>
  );
};

export default Page;
