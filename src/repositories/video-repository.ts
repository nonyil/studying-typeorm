import { Video } from './../entities/video';
import { AppDataSource } from './../data-source';


export const videoRepository = AppDataSource.getRepository(Video);