import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cookieParser from 'cookie-parser';

import { authRoute } from './router/authRouter.js';
import { connectDB } from './db/database.js';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoute)


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on PORT', PORT);
  })
})