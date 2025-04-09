/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Header } from "@/components/Layout/Header/header";
import { Link, useRouter } from "@/i18n/routing";
import React, { useState } from "react";
import { FaEye, FaGoogle, FaGithub } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

// import { useUser } from "@/context/userContext"; // Adjust based on your context import path

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Uncomment if you need to use user context and router
  // const { setUserId } = useUser();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update profile with first and last name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      router.push("/account");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/account");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGithubSignup = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/account");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <Header transparent={false} />
      <div className="flex items-center justify-center my-[50px] bg-white px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="bg-[#F4F4F4] w-[100%] max-w-[680px] flex flex-col items-center shadow-md">
          <h2 className="text-[36px] md:text-[54px] font-[700] pt-[30px] text-[#272727] text-center">
            Sign Up
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full px-[20px] pb-[10px] pt-[30px] max-w-[450px] bg-[#F4F4F4]"
          >
            <div className="mb-[30px]">
              <input
                type="text"
                id="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent border-[#cbc9c9] placeholder-[#B2B2B2] focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-[30px]">
              <input
                type="text"
                id="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent border-[#cbc9c9] placeholder-[#B2B2B2] focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-[30px]">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent border-[#cbc9c9] placeholder-[#B2B2B2] focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-[20px] relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent placeholder-[#B2B2B2] border-[#cbc9c9] focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute pr-[10px] right-[10px] top-[50%] transform -translate-y-[50%] cursor-pointer"
              >
                {showPassword ? (
                  <FaEye className="text-[#989696]" />
                ) : (
                  <TbEyeClosed className="text-[#7f7e7e]" />
                )}
              </span>
            </div>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <button
              aria-label="Create account"
              type="submit"
              className="w-full mt-[20px] py-[15px] font-[700] px-[45px] hover:text-[#3C619E] border-solid border-[2px] border-transparent hover:border-[#3C619E] hover:border-[2px] hover:border-solid hover:bg-transparent bg-[#3C619E] text-[18px] text-white focus:outline-none transition-colors duration-300 ease-in-out"
            >
              Create account
            </button>
          </form>

          <div className="flex flex-col gap-[20px] w-full px-[54px] ">
            <Link
              aria-label="Login"
              href="/login"
              className="underline text-[14px] text-center text-[#969696]"
            >
              Already have an account? Login
            </Link>
          </div>

          {/* Divider */}
          <div className="relative my-6 w-full max-w-[450px]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#F4F4F4] text-gray-500">or</span>
            </div>
          </div>

          {/* Social Signup Buttons */}
          <div className="flex flex-col gap-4 w-full px-[20px] pb-[50px] pt-[10px] max-w-[450px]">
            <button
              onClick={handleGoogleSignup}
              className="flex items-center justify-center gap-3 w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-[#DB4437] text-xl" />
              <span>Continue with Google</span>
            </button>

            <button
              onClick={handleGithubSignup}
              className="flex items-center justify-center gap-3 w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGithub className="text-[#333] text-xl" />
              <span>Continue with GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
