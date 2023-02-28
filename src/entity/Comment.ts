import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from './User';
import { Recipe } from './Recipe';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ nullable: true })
  // parentCommentId: number;
  // @ManyToOne(() => Comment, { nullable: true })
  // parentComment: Comment;

  // @TreeChildren()
  // childComments: Comment[];

  // @TreeParent()
  // parentComment: Comment;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Recipe, (recipe) => recipe.likes)
  recipes: Recipe;
}
