import express from 'express';
import morgan from 'morgan';
import path from 'path';
import AppError from './utils/appError.js';
import { globalErrorHandler } from './controllers/errorController.js';
import { router as tourRouter } from './routes/tourRoutes.js';
import { router as userRouter } from './routes/userRoutes.js';

const __dirname = path.resolve();
const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toDateString();
  console.log(req.requestTime);
  next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
