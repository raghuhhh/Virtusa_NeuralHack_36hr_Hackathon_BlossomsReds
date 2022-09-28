import dotenv from 'dotenv';

dotenv.config();

export default {
  // PORT: process.env.PORT || 5000,
  PORT: 8080,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://admin:6Yzcy5qaz6aRoMD7@cluster0.78sd1.mongodb.net/?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'AKIA3OPHBKSK5RXLS2AB',
  secretAccessKey: process.env.secretAccessKey || '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',
};
