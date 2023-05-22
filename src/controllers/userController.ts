import { Request, Response } from "express";
import UserRepository from "../repositories/userRepository";
import { IUser } from "../models/user";



export default class UserController {

    constructor (private userRepository: UserRepository) {}

    async getAll(req: Request , res: Response): Promise<void> {
        try {
            const users = await this.userRepository.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }


    async getOne(req: Request , res: Response): Promise<void> {
        try {
            const user = await this.userRepository.findById(req.params.id);
            if(!user) {
                res.status(404).json({error: 'user not found!'})
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({error: 'error'})
        }
    }


    async create(req: Request , res: Response): Promise<void> {
        try {
            const user: IUser = req.body;
            const newUser = await this.userRepository.create(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({error: 'error'});
        }
    }


    async update(req: Request , res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const updatedUser: IUser = req.body;
            const user = await this.userRepository.update(id, updatedUser);
            if(!user) {
                res.status(404).json({error:'user not found!'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'error' }); 
        }
    }

    async delete(req: Request , res: Response):Promise<void> {

        try {
            const id = req.params.id;
            const deletedUser = await this.userRepository.delete(req.params.id);
            if(!deletedUser) {
                res.status(404).json({error: 'user not found!'});
            }

            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({ error:'error' });
        }
    }


}