import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from '../controllers/userController.js';
import {
  forgotPassword,
  login,
  resetPassword,
  signUp,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export { router };
