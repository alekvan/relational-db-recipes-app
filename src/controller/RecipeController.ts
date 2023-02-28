import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

import { Recipe } from '../entity/Recipe';

export class RecipeController {
  private recipeRepo: Repository<Recipe>;

  constructor() {
    this.recipeRepo = AppDataSource.getRepository(Recipe);
  }

  async all(req: Request, res: Response) {
    const recipes = await this.recipeRepo.find();
    if (!recipes) {
      return res.status(500).send({ message: 'Server error' });
    }
    return res.status(200).send({ recipes });
  }

  async findOne(req: Request, res: Response) {
    const id = req.params;
    // const recipes = await this.recipeRepo.findOne({where:{id:id}})
    return res.send({ params: id });
  }
}
