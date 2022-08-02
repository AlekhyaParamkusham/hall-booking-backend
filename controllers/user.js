const User = require("./../models/user");
const Hall = require("./../models/hall");
const catchAsync = require("./../utils/catchAsync");

exports.getAllUsers = async (req, res, next) => {
  const halls = await User.find();
  // console.log(halls);
  res.status(200).json({
    status: "success",
    data: halls,
  });
};

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.createUser = async (req, res, next) => {
  console.log(req.body);
  const newUser = await User.create(req.body);

  res.status(200).json({
    status: "success",
    data: newUser,
  });
};

exports.updateUser = async (req, res, next) => {
  const updatedhall = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: updatedhall,
  });
};

exports.deleteUser = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    data: null,
  });
};
