import Tour from '../models/tourModel.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getOverviews = catchAsync(async (req, res, next) => {
  // 1. Get Tour DATA
  const tours = await Tour.find();

  //   2. Build template
  //   3. Render template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

export const getTours = catchAsync(async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  res.status(200).render('tour', {
    title: 'All Tours',
    tour,
  });
});
