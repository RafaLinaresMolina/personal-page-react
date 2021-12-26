import { CHANGE_PAGE, PayloadPages } from "../types/pages";

export const setActivePage = (id: keyof PayloadPages) => ({
    type: CHANGE_PAGE,
    payload: { home:false, curriculum: false, contact: false, [id]: true },
  })