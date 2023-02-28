import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from './Comment';
import { Like } from './Like';
import { Recipe } from './Recipe';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Comment, (comment) => comment.user, { eager: true })
  comments: Comment[];

  @OneToMany(() => Like, (like) => like.user, { eager: true })
  likes: Like[];

  @OneToMany(() => Recipe, (recipe) => recipe.user, { eager: true })
  recipes: Recipe[];
}

// RecipeID RecipeOwnerID  RecipeName        RecipeDescription
// 1         1             Supa so pecurki  asdada
// 2         3             humus so pecurki asdada

// Recipe Location
// recipeID  latitude longitude
// 1         -52       103

// User Comment
// ID  recipeID  userID  message
// 1   1         1       jaka brat
// 2   1         2       neli?
// 3   1         1       da

// User Likes
// recipeID userID
// 1         1
// 1         2
// 1         3
// 2         1
// 2         2
// 2         3

// User
// ID  FirstName
// 1   pero
// 2   andrej
// 3   boban
