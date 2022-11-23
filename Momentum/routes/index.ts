import { Controller } from "../controllers/controller";
import { ControllerBoxe } from "../controllers/controller_boxe";
import { response, Router } from "express";

import express = require('express');

const router: Router = Router();

router.get('/', Controller.hello);
router.get('/all', Controller.all);
router.post('/save', Controller.save);
router.post('/boxe/white', ControllerBoxe.boxe_white);

export default router;