import { RecipeController } from '../controller/RecipeController';
import * as express from 'express';

const router = express();

export default router
  .get('/', (req, res) => new RecipeController().all(req, res))
  .get('/:id', (req, res) => new RecipeController().findOne(req, res));
