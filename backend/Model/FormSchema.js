const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Form", FormSchema);
