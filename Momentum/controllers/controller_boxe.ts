import { Boxe } from "../modules/boxe";
import { Request, Response } from "express";

class FirstController {

    public hello(req: Request, res: Response) {
        return res.json({
            response: Boxe.hello
        });
    }

    public async boxe_white(req: Request, res: Response) {
        return Boxe.white(req, res);
    }
}

export const ControllerBoxe = new FirstController();