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
exports.Boxe = void 0;
const boxe_white_1 = require("../models/boxe_white");
const url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority";
const database = "letterDB";
const collection = "malware";
class FirstBoxe {
    constructor() {
        this.hello = 'Combo boxe layer.';
    }
    white(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const MongoClient = require('mongodb').MongoClient;
            const client = yield MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const db = client.db(database);
            const document = db.collection(collection);
            const first = yield document.find({ $and: [{ name: "destro" }, { "malware.type": "boxe" }, { "malware.framework": "base" }] }).toArray();
            const second = yield document.find({ $and: [{ name: "jab" }, { "malware.type": "boxe" }, { "malware.framework": "blow" }] }).toArray();
            const third = yield document.find({ $and: [{ name: "direto" }, { "malware.type": "boxe" }, { "malware.framework": "blow" }] }).toArray();
            const resistence = req.body.sequence;
            const boxe_white = new boxe_white_1.BoxeWhite(req.body.volts, req.body.coulomb, resistence);
            const boxe = boxe_white;
            return res.json(third);
        });
    }
}
exports.Boxe = new FirstBoxe();
//# sourceMappingURL=boxe.js.map