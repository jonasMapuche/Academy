import { Sequence } from "../modules/sequence";
import { Request, Response } from "express";

class FirstController {

    public hello(req: Request, res: Response) {
        return res.json({
            response: Sequence.hello
        });
    }

    public async all(req: Request, res: Response) {
        return Sequence.all(req, res);
    }

    public async save(req: Request, res: Response) {
        return Sequence.save(req, res);
    }
}

export const Controller = new FirstController();