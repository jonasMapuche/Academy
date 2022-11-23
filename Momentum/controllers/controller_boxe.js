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
exports.ControllerBoxe = void 0;
const boxe_1 = require("../modules/boxe");
class FirstController {
    hello(req, res) {
        return res.json({
            response: boxe_1.Boxe.hello
        });
    }
    boxe_white(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return boxe_1.Boxe.white(req, res);
        });
    }
}
exports.ControllerBoxe = new FirstController();
//# sourceMappingURL=controller_boxe.js.map