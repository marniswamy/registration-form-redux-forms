import { createStore } from "redux";
import reducer from "./reducers/reducer";

export default (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
