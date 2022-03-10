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

type WardPayload = {
    [WardTypes.AddBed]: BedPayload;
    [WardTypes.AddRoom]: AddRoomPayload;
    [WardTypes.DeleteBed]: BedPayload;
    [WardTypes.DeleteRoom]: {
        id: number;
    };
    [WardTypes.SaveInfo]: {
        info: Bed;
        roomId: number;
    };
}

export type WardActions = ActionMap<WardPayload>[keyof ActionMap<WardPayload>];