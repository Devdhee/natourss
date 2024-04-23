import express from 'express';
import {
  createTour,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlans,
} from '../controllers/tourController.js';
// import { createNewReview } from '../controllers/reviewController.js';
import { router as reviewRouter } from './reviewRoutes.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

// router.param('id', checkID);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plans/:year')
  .get(protect, restrictTo('admin', 'lead-guide'), getMonthlyPlans);

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

router.use('/:tourId/reviews', reviewRouter);

// router
//   .route('/:tourId/reviews')
//   .post(protect, restrictTo('user'), createNewReview);

export { router };
