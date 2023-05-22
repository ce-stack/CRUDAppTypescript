import express, { Router } from 'express';
import UserController from '../controllers/userController';
import UserRepository from '../repositories/userRepository';
import UserModel, { IUser } from '../models/user';

const router: Router = express.Router();
const userRepository = new UserRepository(UserModel);
const userController = new UserController(userRepository);

router.get('/', userController.getAll.bind(userController));
router.get('/:id', userController.getOne.bind(userController));
router.post('/', userController.create.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

export default router;

