import 'dotenv/config'
import { router } from './routes';
import { AppDataSource } from './data-source';
import express, { Request, Response } from 'express';

AppDataSource.initialize().then(() => {

  const app = express();

  app.use(express.json());

  app.use(router);

  return app.listen(process.env.PORT)

});
