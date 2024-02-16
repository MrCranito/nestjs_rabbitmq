import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const runOptions: PostgresConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5434'),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/migrations/*.js'],
  ssl: {
    rejectUnauthorized: false 
  }
};

const testOptions: PostgresConnectionOptions = {
  ...runOptions,
  entities: [__dirname + '/src/**/*.entity.ts'],
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5434'),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: true,
  migrations: [__dirname + '/src/migrations/*.ts'],
  logging: 'all',
};

export default process.env.NODE_ENV === 'development' ? testOptions : runOptions;

export function getConfig() {
  return process.env.NODE_ENV === 'development' ? testOptions : runOptions;
}
