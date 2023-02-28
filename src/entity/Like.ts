import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Recipe } from './Recipe';

@Entity()
export class Like {
  @PrimaryColumn()
  userId: number;
  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @PrimaryColumn()
  recipeId: number;
  @ManyToOne(() => Recipe, (recipe) => recipe.likes, { eager: true })
  recipe: Recipe;
}
