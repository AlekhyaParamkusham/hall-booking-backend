const mongoose = require("mongoose");

const HallSchema = new mongoose.Schema({
  hall_name: {
    type: String,
    required: true,
    unique: true,
  },
  hall_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  amenities: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "available",
    required: true,
  },
  userInfo: {
    type: "String",
  },
});

module.exports = mongoose.model("Hall", HallSchema);
