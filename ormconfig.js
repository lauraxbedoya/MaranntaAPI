const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['database/migrations/**/*.ts'],
  subscribers: ['src/**/*.subscriber.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'database/migrations',
    subscribersDir: 'src/subscriber',
  },
  seeds: ['seeder/*.seed.ts'],
  factories: [],
};

module.exports = config;
