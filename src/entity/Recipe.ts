import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { Like } from './Like';
import { User } from './User';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipeName: string;

  @Column()
  recipeImg: string;

  @Column()
  prepTime: number;

  @Column()
  numOfPeople: number;

  @ManyToOne(() => User, (user) => user.recipes)
  user: User;

  @OneToMany(() => Like, (like) => like.recipe)
  likes: Like[];
}
