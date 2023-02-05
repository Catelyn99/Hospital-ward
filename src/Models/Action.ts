import { Bed } from "./Bed";

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum WardTypes {
    AddBed = 'ADD_BED',
    ActivateRoom = 'ACTIVATE_ROOM',
    AddRoom = 'ADD_ROOM',
    DeleteBed = 'DELETE_BED',
    DeleteRoom = 'DELETE_ROOM',
    SaveInfo = 'SAVE_INFO'
}

interface BedPayload {
    roomId: number;
    areaId: number;
}

interface AddRoomPayload {
    roomId: number;
    type: string;
}

interface ActivateRoomPayload {
    id: number;
}

type WardPayload = {
    [WardTypes.AddBed]: BedPayload;
    [WardTypes.ActivateRoom]: ActivateRoomPayload;
    [WardTypes.AddRoom]: AddRoomPayload;
    [WardTypes.DeleteBed]: BedPayload;
    [WardTypes.DeleteRoom]: ActivateRoomPayload;
    [WardTypes.SaveInfo]: {
        info: Bed;
        roomId: number;
    };
}

export type WardActions = ActionMap<WardPayload>[keyof ActionMap<WardPayload>];