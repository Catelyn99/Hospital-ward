import { Area } from "./Area";

export interface Room {
    id: number;
    type: string;
    amount: number;
    areas: Array<Area>;
}