export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  MONGOURL: process.env.MONGOURL || 'mongodb://127.0.0.1:27017/',
};
