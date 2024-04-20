import express from 'express';
import {
  createNewReview,
  getAllReviews,
} from '../controllers/reviewController';

export const router = express.Router();

router.route('/').post(createNewReview).get(getAllReviews);
router.route('/:id');
