import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import { API_URL } from "../utils"; // replace with your own utils file
import { useRef } from "react";
import { addEmployee } from "../utils/store/employee.js";

const NewEmployeeForm = ({updateEmployeesState}) => {
  const [submitting, setSubmitting] = useState(false);
  const formikRef = useRef(null);

  const validationSchema = Yup.object().shape({
    matricule: Yup.string().required("Matricule is required"),
    fullName: Yup.string().required("Full name is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      //   await axios.post(`${API_URL}/employees`, values);
      await addEmployee(values);

      alert("New employee added successfully!");
    } catch (error) {
      alert(`Error adding employee: ${error.message}`);
    }
    setSubmitting(false);
    formikRef.current.resetForm();
    updateEmployeesState();
  };

  return (
    <div className="max-w-sm mx-auto">
      <Formik
        innerRef={formikRef}
        initialValues={{ matricule: "", fullName: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="matricule"
              >
                Matricule
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="matricule"
                placeholder="Enter matricule"
              />
              <ErrorMessage
                name="matricule"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="fullName"
                placeholder="Enter full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting || submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default NewEmployeeForm;
