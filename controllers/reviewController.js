import Review from '../models/reviewModel.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    length: reviews.length,
    data: {
      reviews,
    },
  });
});

export const createNewReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);
  if (!newReview)
    return next(
      new AppError(
        'An error occured while creating the review, please try again later',
        400
      )
    );

  res.status(201).json({
    status: 'success',
    data: {
      newReview,
    },
  });
});