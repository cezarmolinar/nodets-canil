import { Request, Response } from 'express';


import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const home = (req: Request, response: Response) => {
    let list = Pet.getAll();

    response.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, response: Response) => {
    let list = Pet.getFromType('dog');
    response.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, response: Response) => {
    let list = Pet.getFromType('cat');
    response.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, response: Response) => {
    let list = Pet.getFromType('fish');
    response.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });

}