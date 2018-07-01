const database = {
  development: {
    username: process.env.DATABASE_USERNAME_DEV || 'root',
    password: process.env.DATABASE_PASSWORD_DEV || 'root',
    database: process.env.DATABASE_NAME_DEV || 'blog',
    host: process.env.DATABASE_PASSWORD_DEV || '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

export default database;