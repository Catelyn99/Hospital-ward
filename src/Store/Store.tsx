import { createContext, useReducer } from "react";
import { Area } from "../Models/Area";
import { State } from "../Models/State";
import wardReducer from "./WardReducer";


const setAreas = (amount: number): Array<Area> => {
  const areas: Array<Area> = [];
  for (let id = 1; id <= amount; id++) {
    areas.push({
      id: id,
      bed: { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: id }
    });
  }
  return areas;
}

const initialState: State = {
  rooms: [
    {
      id: 1,
      type: 'isolation',
      amount: 1,
      areas: setAreas(1)
    }, {
      id: 2,
      type: 'intensive',
      amount: 2,
      areas: setAreas(2)
    }, {
      id: 3,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }, {
      id: 4,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }, {
      id: 5,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }, {
      id: 6,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }, {
      id: 7,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }, {
      id: 8,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }, {
      id: 9,
      type: 'normal',
      amount: 3,
      areas: setAreas(3)
    }]
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(wardReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch] as any}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;