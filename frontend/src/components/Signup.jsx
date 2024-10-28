import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  console.log(userInfo);
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        // Store user info and navigate
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success("Signup Successfully");
        navigate("/"); // Navigates to home page
      }
    } catch (err) {
      // Check if it's a server error or a network error
      if (err.response) {
        // Response was received but with an error status code
        console.error("Server responded with an error:", err.response.data);
        toast.error("Error: " + (err.response.data.message || "Signup failed, please try again."));
      } else if (err.request) {
        // Request was made, but no response was received
        console.error("No response received from server:", err.request);
        toast.error("Network error: Unable to reach the server.");
      } else {
        // Something else happened in setting up the request
        console.error("Error in setting up the request:", err.message);
        toast.error("Signup failed, please try again.");
      }
    }
  };
  

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            
            {/* Full Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
