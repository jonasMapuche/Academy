"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = void 0;
const momentum_1 = require("../models/momentum");
const malware_1 = require("../models/malware");
const url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority";
const database = "letterDB";
const collection = "malware";
class FirstSequence {
    constructor() {
        this.hello = 'Crud sequence momentum.';
    }
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const MongoClient = require('mongodb').MongoClient;
            const client = yield MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const db = client.db(database);
            const document = db.collection(collection);
            const exit = yield document.find().toArray();
            return res.json(exit);
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = [];
            req.body.list.forEach((index) => {
                const malware = new malware_1.Malware(index.name, index.check, index.rank, index.description, req.body.name, req.body.framework);
                const momentum = new momentum_1.Momentum(index.name, malware);
                list.push(momentum);
            });
            const MongoClient = require('mongodb').MongoClient;
            const client = yield MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const db = client.db(database);
            const document = db.collection(collection);
            document.insertMany(list);
            return res.json(list);
        });
    }
}
exports.Sequence = new FirstSequence();
//# sourceMappingURL=sequence.js.map