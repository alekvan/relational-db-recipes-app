import { UserController } from '../controller/UserController';
import * as express from 'express';

const router = express();

export default router
  .get('/', (req, res) => new UserController().all(req, res))
  .get('/:id', (req, res) => new UserController().one(req, res))
  .post('/', (req, res) => new UserController().save(req, res))
  .delete('/:id', (req, res) => new UserController().remove(req, res));
