import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLock } from 'react-icons/ai';

export default function ChangePassword() {
  let navigate = useNavigate();

  const handleChangePassword = async (formValues) => {
    try {
      const token = localStorage.getItem("UserToken");
      if (!token) {
        console.log("No token found, user needs to log in.");
        return;
      }

      const { data } = await axios.post(
        "http://bookevent.runasp.net/api/Auth/Change-Password",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Fetched User Data:", data);
      navigate('/login');
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response?.status === 401) {
        console.log("Unauthorized! Redirect to login or refresh token.");
      }
    }
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Old password is required'),
    newPassword: Yup.string().required('New password is required'),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
    },
    validationSchema,
    onSubmit: handleChangePassword,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-700 via-blue-900 to-indigo-900 px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-10 max-w-md w-full shadow-lg border border-white/20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-500 mb-2">Change Password</h1>
          <p className="text-indigo-200 font-medium">Secure your account</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div className="relative">
            <AiOutlineLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300" size={24} />
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              placeholder="Current Password"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full pl-12 pr-4 py-3 rounded-full border-2 
                focus:outline-none focus:ring-2 focus:ring-indigo-400 transition 
                placeholder-indigo-300 text-indigo-900 font-semibold 
                ${formik.errors.currentPassword && formik.touched.currentPassword ? 'border-red-500' : 'border-indigo-300'}`}
            />
            {formik.errors.currentPassword && formik.touched.currentPassword && (
              <p className="mt-2 text-red-600 text-sm text-center">{formik.errors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div className="relative">
            <AiOutlineLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300" size={24} />
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="New Password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full pl-12 pr-4 py-3 rounded-full border-2 
                focus:outline-none focus:ring-2 focus:ring-indigo-400 transition
                placeholder-indigo-300 text-indigo-900 font-semibold 
                ${formik.errors.newPassword && formik.touched.newPassword ? 'border-red-500' : 'border-indigo-300'}`}
            />
            {formik.errors.newPassword && formik.touched.newPassword && (
              <p className="mt-2 text-red-600 text-sm text-center">{formik.errors.newPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300" >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
