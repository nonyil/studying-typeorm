import { SubjectController } from './controllers/subject.controller';
import { Router } from 'express';
import { RoomController } from './controllers/room.controller';

export const router = Router();

router.post('/subject', new SubjectController().create)
router.post('/room', new RoomController().create)
router.post('/room/:idRoom/create', new RoomController().createVideo)
router.post('/room/:idRoom/subject', new RoomController().roomSubject)
router.get('/room', new RoomController().list)
