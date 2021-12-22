import {ReactNode} from "react";

export type DefaultItem = {
    id: string;
    icon?: ReactNode;
    text?: string;
    active: boolean;
    url?: string;
}
