import { DataSource } from 'typeorm';
import * as Entities from './entity/index';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgrespw',
  password: 'postgrespw',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: Object.values(Entities),
  migrations: [],
  subscribers: [],
});

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!');
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err);
//   });
