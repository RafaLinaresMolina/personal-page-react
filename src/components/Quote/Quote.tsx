import { FunctionComponent } from "react";
import "./Quote.scss"

interface QuoteProps {
    author: string;
    quote: string;
}
 
const Quote: FunctionComponent<QuoteProps> = ({quote, author}) => {
    return ( 
        <div className="quote">
          <div className="quoteItself">
            "{quote}"
          </div>
          <div className="quoteAuthor">– {author}</div>
        </div>
     );
}
 
export default Quote;