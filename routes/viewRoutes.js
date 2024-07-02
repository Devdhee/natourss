import express from 'express';
import { getOverviews, getTours } from '../controllers/viewsController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'Forest Hiker',
  });
});

router.get('/overviews', getOverviews);
router.get('/tour/:slug', getTours);

router.get('/tour', (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
});

export { router };
