import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { router as tourRouter } from './routes/tourRoutes.js';
import { router as userRouter } from './routes/userRoutes.js';

const __dirname = path.resolve();
const app = express();

// MIDDLEWARES
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware!!👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toDateString();
  console.log(req.requestTime);
  next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;
