import { Subject } from './../entities/subject';
import { AppDataSource } from './../data-source';


export const subjectRepository = AppDataSource.getRepository(Subject);

