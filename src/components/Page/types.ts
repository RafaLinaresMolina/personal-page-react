import { ReactNode } from "react";
import { PayloadPages } from "../../redux/types/pages";

export type QuoteType = {
    __typename: "Quote"
    quote: string;
    author: string;
}

export type EntryType = {
    __typename: "Entry"
    picture: ReactNode;
    text: {
        title: string;
        text: string;
        list: ReactNode;
        url?: string;
    }
}

export type Content = QuoteType | EntryType;

export type PageType = {
    id: keyof PayloadPages;
    title: string;
    content: Content[];  
}

export const isQuote = (content: Content): content is QuoteType => {
    return content.__typename === "Quote"
}

export const isEntry = (content: Content): content is EntryType => {
    return content.__typename === "Entry"
}