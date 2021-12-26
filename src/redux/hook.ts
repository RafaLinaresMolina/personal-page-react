import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { initialState } from '../redux/reducers/pages';
export const useTypedSelector: TypedUseSelectorHook<typeof initialState> = useSelector;