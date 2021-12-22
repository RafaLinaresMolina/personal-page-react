import { FunctionComponent } from "react";
import { EntryType } from "../Page/types";
import "./Entry.scss";

interface EntryProps {
  entry: EntryType;
}

const Entry: FunctionComponent<EntryProps> = ({ entry }) => {
  return (
    <div className="infoCard bg1">
      <div className="imageOnCard">
          {entry.picture}
      </div>
      <div className="cardText">
        <h3>
          {entry.text?.url ? 
          <a href={entry.text.url} target="_blank" rel="noreferrer">
            {entry.text.title}
          </a> 
          : entry.text.title}
        </h3>
        <br />
        {entry.text.text}
        <br />
        {entry.text.list}
      </div>
    </div>
  );
};

export default Entry;
