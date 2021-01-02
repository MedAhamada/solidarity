export const environment = {
  production: false,
  jwt_secret: 'secretKey',
  db: {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "pdirect",
    database: "pdirect",
    autoLoadEntities: true,
    synchronize: true
  }
};
