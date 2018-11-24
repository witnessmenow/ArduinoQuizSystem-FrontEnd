import { Participant } from "./participant";

export class RaffleSettings {
    public name: string;
    public participants?: Array<Participant>;
    public winners?: Array<Participant>;
}
