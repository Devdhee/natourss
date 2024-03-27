import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});

const getUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'This route is not yet defined!!',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!!',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!!',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!!',
  });
};

export { createUser, updateUser, deleteUser, getAllUsers, getUser };
