import { Application, Request, Response } from 'express';
import {
  createUser,
  login,
  getUserInfo,
} from '../controllers/users-controller';
import { checkAuth } from '../middlewares/auth';

const routes = (app: Application) => {
  app.post('/create', createUser);
  app.post('/login', login);
  app.get('/get-user-info', checkAuth, getUserInfo);
};

export default routes;
