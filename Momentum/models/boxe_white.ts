import { Resistence } from "../models/resistence";

export class BoxeWhite {

    volts: Number;
    coulomb: Number;
    sequence: Array<Resistence>;

    constructor(volts: Number, coulomb: Number, sequence: Array<Resistence>) {
        this.volts = volts;
        this.coulomb = coulomb;
        this.sequence = sequence;
    }
}