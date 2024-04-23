import express from 'express';
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateMe,
  deleteMe,
  getMe,
} from '../controllers/userController.js';
import {
  forgotPassword,
  login,
  protect,
  resetPassword,
  restrictTo,
  signUp,
  updatePassword,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);

router.use(protect);

router.patch('/update-my-password', updatePassword);
router.patch('/update-me', updateMe);
router.delete('/delete-me', deleteMe);
router.get('/me', getMe, getUser);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export { router };
