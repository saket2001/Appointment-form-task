const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const Form = require("./Model/FormSchema");

/////////////////////////////

const server = express();
server.use(express.json());
server.use(cors());

const url = "mongodb://localhost:27017/Appointment-Forms";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/////////////////////////////
server.get("/", (req, res) => {
  return res.json("Api Working....");
});

server.get("/get-forms", (req, res) => {
  Form.find().then((data) => res.json(data));
});

server.post("/api/v1/book-appointment", (req, res) => {
  console.log("Received");
  const formInput = req.body;

  const formData = new Form({
    name: formInput.name,
    email: formInput.email,
    phoneNumber: formInput.phoneNumber,
    appointmentDate: formInput.appointmentDate
      ? formInput.appointmentDate
      : new Date(),
  });

  formData
    .save()
    .then(() =>
      res.json({ type: true, message: "Form Submitted successfully" })
    )
    .catch((err) => {
      console.log(err);
      return res.json({
        type: false,
        message: "Form Not Submitted successfully",
        error: err,
      });
    });
});

server.listen(PORT);
