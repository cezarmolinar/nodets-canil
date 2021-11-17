import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const search = (req: Request, response: Response) => {
    let query: string = req.query.busca as string;

    if (!query) {
        response.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    response.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}