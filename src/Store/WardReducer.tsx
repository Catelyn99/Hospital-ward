import { WardActions, WardTypes } from "../Models/Action";
import { Area } from "../Models/Area";
import { Bed } from "../Models/Bed";
import { Room } from "../Models/Room";
import { State } from "../Models/State";
import { MAX_AMOUNT_OF_BEDS } from "./constants";

const wardReducer = (state: State, action: WardActions): State => {
    switch (action.type) {
        case WardTypes.DeleteRoom:
            return {
                ...state,
                rooms: state.rooms.filter(room => room.id !== action.payload.id)
            }
        case WardTypes.AddBed:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (action.payload.roomId === room.id) {
                        const bed: Bed = { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: action.payload.areaId };

                        if (action.payload.areaId > room.areas.length && action.payload.areaId < MAX_AMOUNT_OF_BEDS) {
                            return {
                                ...room,
                                areas: [
                                    ...room.areas,
                                    { id: action.payload.areaId, bed }
                                ]
                            }
                        }

                        return {
                            ...room,
                            areas: room.areas.map(area => {
                                if (area.id === action.payload.areaId) {
                                    return { ...area, bed };
                                }
                                return area;
                            })
                        };
                    }

                    return room;
                })
            };
        case WardTypes.DeleteBed:
            return {
                ...state,
                rooms: state.rooms.map((room): Room => {
                    if (action.payload.roomId === room.id) {
                        if (room.areas.filter(area => area.bed !== null).length === 1) {
                            alert('Przepraszamy, na sali musi pozostać 1 łóżko.');
                            return room;
                        }

                        return {
                            ...room,
                            areas: room.areas.map(area => {
                                if (area.id === action.payload.areaId) {
                                    return { ...area, bed: null };
                                }
                                return area;
                            })
                        };
                    }

                    return room;
                })
            };
        case WardTypes.SaveInfo:
            return {
                ...state,
                rooms: state.rooms.map((room): Room => {
                    if (action.payload.roomId === room.id) {
                        return {
                            ...room,
                            areas: room.areas.map((area): Area => {
                                if (area.id === action.payload.info.id) {
                                    return { ...area, bed: action.payload.info };
                                }
                                return area;
                            })
                        }
                    }

                    return room;
                })
            };
        default:
            return {
                ...state
            };
    }
};


export default wardReducer;