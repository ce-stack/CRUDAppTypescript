import { Model } from "mongoose";
import { IUser } from "../models/user";



export default class UserRepository  {
    constructor (private userModel: Model<IUser>){}

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }

    async findById(id: string): Promise<IUser | null> {
        return await this.userModel.findById(id);
    }

    async create(user: IUser): Promise<IUser> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async update(id: string , user: IUser): Promise<IUser | null> {
        return await this.userModel.findByIdAndUpdate(id , user , {new:true});
    }

    async delete(id: string): Promise<IUser | null> {
        return await this.userModel.findByIdAndDelete(id);
    }

}