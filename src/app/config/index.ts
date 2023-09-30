import 'dotenv/config';
const env = (key: string) => {
  return process.env[key];
};

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  MONGOURL: process.env.MONGOURL || 'mongodb://127.0.0.1:27017/',
  MONGO: [
    {
      DB: 'YappDB',
      CONNECTION: env('MONGO_URL') ?? 'mongodb://127.0.0.1:27017/YappDB',
    },
  ],
};
