const Hall = require("./../models/hall");
const User = require("./../models/user");
const catchAsync = require("./../utils/catchAsync");

exports.getAllHalls = async (req, res, next) => {
  const halls = await Hall.find();

  res.status(200).json({
    status: "success",
    data: halls,
  });
};

exports.getHall = async (req, res, next) => {
  const hall = await Hall.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: hall,
  });
};

exports.createHall = async (req, res, next) => {
  const newHall = await Hall.create(req.body);

  res.status(200).json({
    status: "success",
    data: newHall,
  });
};

exports.deleteHall = async (req, res, next) => {
  const hall = await Hall.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    data: null,
  });
};

exports.bookHall = catchAsync(async (req, res, next) => {
  const hallId = req.params.id;

  const bookedHall = await Hall.findByIdAndUpdate(
    hallId,
    {
      $set: { userInfo: req.body.userInfo, status: "Not available" },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (bookedHall) {
    const userId = req.body.userInfo;
    const data = await Hall.findById(hallId);

    const updated = await User.findByIdAndUpdate(userId, {
      $set: { hallInfo: data.id, hasHall: true },
    });
  }

  res.status(200).json({
    status: "success",
    data: bookedHall,
  });
});
