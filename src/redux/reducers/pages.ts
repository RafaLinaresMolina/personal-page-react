import { CHANGE_PAGE, PayloadPages } from "../types/pages";
import { PayloadAction } from '@reduxjs/toolkit'

export const initialState: PayloadPages = {
    home: true,
    curriculum: false,
    contact: false,
}

const reducer = (
    state = initialState,
    action: PayloadAction<typeof initialState>
): typeof initialState => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                home: action.payload.home,
                curriculum: action.payload.curriculum,
                contact: action.payload.contact,
            }
    }
    return state
}

export default reducer