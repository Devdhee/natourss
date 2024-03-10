import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export { router };
