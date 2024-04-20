import mongoose, { Schema, model } from 'mongoose';

const reviewSchema = new Schema(
  {
    review: {
      type: String,
      required: [true, 'Kindly provide a review'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Kindly provide a rating for the tour'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'review must belong to a tour'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'review must belong to a user'],
    },
  },
  {
    strictQuery: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'User Tour',
  });

  next();
});

const Review = model('Review', reviewSchema);

export default Review;
