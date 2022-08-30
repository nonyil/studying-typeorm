import { Room } from './../entities/room';
import { AppDataSource } from './../data-source';


export const roomRepository = AppDataSource.getRepository(Room);