import React from "react";
import { useFormik } from "formik";

export const Form = () => {
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      appointmentDate: "",
    },
    onSubmit: async (values) => {
      const res = await fetch("http://localhost:5000/api/v1/book-appointment", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });

      const response = await res.json();

      console.log(response);
      alert(response.message);
    },
  });

  return (
    <div className="flex justify-center min-w-100">
      <div className="w-3/4 md:w-1/2 grid grid-cols-1 bg-gray-50 px-6 py-8 md:px-12 rounded-md shadow-md my-4 gap-2">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
          Appointment Form
        </h2>
        <p className="text-md md:text-lg text-gray-600">
          Fill in the required details to proceed further
        </p>
        <hr />
        {/* form elements */}
        <form onSubmit={form.handleSubmit}>
          {/* name */}
          <label
            htmlFor="name"
            className="grid grid-cols-1 gap-2 text-md md:text-lg"
          >
            Name
            <input
              type="text"
              name="name"
              className="rounded-md text-md md:text-lg"
              onChange={form.handleChange}
              value={form.name}
              required
            />
          </label>
          {/* email */}
          <label
            htmlFor="email"
            className="grid grid-cols-1 gap-2 text-md md:text-lg"
          >
            Email
            <input
              type="email"
              name="email"
              className="rounded-md"
              placeholder="someone@gmail.com"
              onChange={form.handleChange}
              value={form.email}
              required
            />
          </label>
          {/* phone no */}
          <label
            htmlFor="phoneNumber"
            className="grid grid-cols-1 gap-2 text-md md:text-lg"
          >
            Phone Number
            <input
              type="number"
              name="phoneNumber"
              className="rounded-md"
              onChange={form.handleChange}
              value={form.phoneNumber}
              required
            />
          </label>
          {/* Date */}
          <label
            htmlFor="date"
            className="grid grid-cols-1 gap-2 text-md md:text-lg"
          >
            Date
            <input
              type="date"
              name="appointmentDate"
              id="date"
              className="rounded-md"
              onChange={form.handleChange}
              value={form.appointmentDate}
              required
            />
          </label>
          <br />
          {/* button */}
          <button
            type="submit"
            className="px-5 py-2 bg-blue-900 text-gray-100 my-3 rounded-md hover:shadow-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
