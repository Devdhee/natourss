import express from 'express';
import {
  createTour,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
} from '../controllers/tourController.js';

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

export { router };
