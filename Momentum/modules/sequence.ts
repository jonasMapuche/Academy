import { Request, response, Response } from "express";
import { Momentum } from "../models/momentum";
import { Malware } from "../models/malware";
const url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority";
const database = "letterDB";
const collection = "malware";

class FirstSequence {

    public hello: string = 'Crud sequence momentum.';

    public async all(req: Request, res: Response) {
        const MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = client.db(database);
        const document = db.collection(collection);
        const exit = await document.find().toArray();

        return res.json(exit);
    }

    public async save(req: Request, res: Response) {
        const list: Array<Momentum> = [];
        req.body.list.forEach((index) => {
            const malware: Malware = new Malware(index.name, index.check, index.rank, index.description, req.body.name, req.body.framework);
            const momentum: Momentum = new Momentum(index.name, malware);
            list.push(momentum);
        });
        const MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = client.db(database);
        const document = db.collection(collection);
        document.insertMany(list);

        return res.json(list);
    }
}

export const Sequence = new FirstSequence();
