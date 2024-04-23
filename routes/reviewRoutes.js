import express from 'express';
import {
  createNewReview,
  deleteReview,
  getAllReviews,
  getReview,
  setTourUserId,
  updateReview,
} from '../controllers/reviewController.js';
import { protect, restrictTo } from '../controllers/authController.js';

export const router = express.Router({ mergeParams: true });
router.use(protect);

router
  .route('/')
  .post(restrictTo('user'), setTourUserId, createNewReview)
  .get(getAllReviews);
router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);
