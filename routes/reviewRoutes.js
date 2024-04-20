import express from 'express';
import {
  createNewReview,
  getAllReviews,
} from '../controllers/reviewController.js';
import { protect, restrictTo } from '../controllers/authController.js';

export const router = express.Router();

router
  .route('/')
  .post(protect, restrictTo('user'), createNewReview)
  .get(getAllReviews);
router.route('/:id');
