import { Request, response, Response } from "express";
import { BoxeWhite } from "../models/boxe_white";
import { Resistence } from "../models/resistence";
const url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority";
const database = "letterDB";
const collection = "malware";

class FirstBoxe {

    public hello: string = 'Combo boxe layer.';
    private value: String;

    public async white(req: Request, res: Response) {
        const MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = client.db(database);
        const document = db.collection(collection);
        const first = await document.find({ $and: [{ name: "destro" }, { "malware.type": "boxe" }, { "malware.framework": "base" }] }).toArray();
        const second = await document.find({ $and: [{ name: "jab" }, { "malware.type": "boxe" }, { "malware.framework": "blow" }] }).toArray();
        const third = await document.find({ $and: [{ name: "direto" }, { "malware.type": "boxe" }, { "malware.framework": "blow" }] }).toArray();
        const resistence: Array<Resistence> = req.body.sequence;
        const boxe_white: BoxeWhite = new BoxeWhite(req.body.volts, req.body.coulomb, resistence);
        const boxe: BoxeWhite = boxe_white;
        return res.json(third);
    }

}

export const Boxe = new FirstBoxe();