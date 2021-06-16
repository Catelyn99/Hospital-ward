import { ADD_BED, DELETE_BED, DELETE_ROOM, SAVE_INFO } from "../Store/constants";

export enum ActionType {
    AddBed = 'ADD_BED',
    DeleteBed = 'DELETE_BED',
    DeleteRoom = 'DELETE_ROOM',
    SaveInfo = 'SAVE_INFO'
}

interface DeleteRoomPayload {
    id: number;
}

interface BedPayload {
    roomId: number;
    areaId: number;
}

export interface Action {
    type: ActionType;
    payload: BedPayload | DeleteRoomPayload
}