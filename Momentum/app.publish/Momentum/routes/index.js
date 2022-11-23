"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controllers/controller");
const controller_boxe_1 = require("../controllers/controller_boxe");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', controller_1.Controller.hello);
router.get('/all', controller_1.Controller.all);
router.post('/save', controller_1.Controller.save);
router.post('/boxe/white', controller_boxe_1.ControllerBoxe.boxe_white);
exports.default = router;
//# sourceMappingURL=index.js.map