import { createContext, useReducer } from "react";
import WardReducer from "./WardReducer";


const setAreas = (amount) => {
    const areas = [];
    for (let a = 1; a <= amount; a++) {
      areas.push({
        id: a,
        bed: { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: a }
      });
    }
    return areas;
  }

const initialState = {
        rooms: [
          {
            id: 1,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 2,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 3,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 4,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 5,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 6,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 7,
            type: 'normal',
            amount: 3,
            areas: setAreas(this.amount)
          }, {
            id: 'IZOLATKA',
            type: 'isolation',
            amount: 1,
            areas: setAreas(this.amount)
          }, {
            id: 'SIOM',
            type: 'intensive',
            amount: 2,
            areas: setAreas(this.amount)
          }],
};

const Store = ({children}) => {
   const [state, dispatch] = useReducer(WardReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}> 
            {children}
        </Context.Provider>
    );
};

export const Context = createContext(initialState);
export default Store;