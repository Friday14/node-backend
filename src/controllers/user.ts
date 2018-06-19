import {Request, Response} from "express";
import * as user from '../models/user';

export async function create(req: Request, res: Response) {
    let newUser = await user.create('', false);
    return res.send(JSON.stringify(newUser));
}

export async function update(req: Request, res: Response) {
    const {id, email, shared} = req.body;
    const isUpdated = await user.update(id, email, shared);

    res.send(JSON.stringify({
        id: id,
        email: email,
        shared: shared,
        error: !isUpdated
    }));
}