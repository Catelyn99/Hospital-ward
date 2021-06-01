const wardReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BED':
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (action.payload.roomId === room.id) {
                        const bed = { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: action.payload.areaId };

                        if(action.payload.areaId > room.areas.length && action.payload.areaId < 11) {
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
        case 'DELETE_BED':
            return {
                ...state,
                rooms: state.rooms.map(room => {
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
        case 'SAVE_INFO':
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (action.payload.roomId === room.id) {
                        return {
                            ...room,
                            areas: room.areas.map(area => {
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