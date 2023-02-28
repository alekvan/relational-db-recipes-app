import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';
import { User } from '../entity/User';

export class UserController {
  private userRepository: Repository<User>;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
  async all(request: Request, response: Response) {
    const users = await this.userRepository.findAndCount({
      where: {},
    });
    return response.status(200).json({ users });
  }

  async one(request: Request, response: Response) {
    const id = parseInt(request.params.id);

    const user = await this.userRepository.findOne({ where: { id: id } });

    if (!user) {
      return response.send('unregistered user');
    }
    return response.send({ user });
  }

  async save(request: Request, response: Response) {
    const { firstName, lastName, age } = request.body;

    const user = Object.assign(new User(), {
      firstName,
      lastName,
      age,
    });

    response.json('Created');

    return this.userRepository.save(user);
  }

  async remove(request: Request, response: Response) {
    const id = parseInt(request.params.id);

    let userToRemove = await this.userRepository.findOne({ where: { id: id } });

    if (!userToRemove) {
      return 'this user not exist';
    }

    await this.userRepository.remove(userToRemove);

    return 'user has been removed';
  }
}
