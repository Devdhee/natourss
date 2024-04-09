import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateMe,
} from '../controllers/userController.js';
import {
  forgotPassword,
  login,
  protect,
  resetPassword,
  signUp,
  updatePassword,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);

router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);
router.patch('/update-my-password', protect, updatePassword);
router.patch('/update-me', protect, updateMe);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export { router };
