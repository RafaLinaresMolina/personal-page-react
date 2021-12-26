import {ReactNode} from "react";
import { PayloadPages } from "../../redux/types/pages";

export type DefaultPages = {
    id: keyof PayloadPages;
    icon?: ReactNode;
    text?: string;
    active: boolean;
    url?: string;
}

export type DefaultItem = {
    id: string;
    icon?: ReactNode;
    text?: string;
    active: boolean;
    url?: string;
}