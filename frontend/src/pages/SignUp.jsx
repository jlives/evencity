import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AuthNavbar from "../components/AuthNavbar";
import toast from "react-hot-toast";
import api from "../services/api";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Creating your account...");
    try {
      const formattedData = {
        username: `${data.firstName}${data.lastName}`.toLowerCase(),
        email: data.email,
        password: data.password,
        role: "user",
        profile: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      };

      await api.post("/auth/register", formattedData);
      toast.dismiss(loadingToast);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Failed to create account");
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-white">
      <AuthNavbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="p-6 w-full max-w-sm">
          <h1 className="text-2xl text-gray-700 font-bold mb-6">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full bg-gray-800 text-white p-4 py-2 rounded-lg border border-gray-700"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full bg-gray-800 text-white p-4 py-2 rounded-lg border border-gray-700"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full bg-gray-800 text-white p-4 py-2 rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must contain at least one letter and one number",
                  },
                })}
                className={`w-full bg-gray-800 text-white p-4 py-2 rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white p-4 py-2 rounded-lg border hover:bg-blue-700 transition-all"
            >
              Create Account
            </motion.button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
