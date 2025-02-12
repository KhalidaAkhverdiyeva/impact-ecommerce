/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Header } from "@/components/Layout/Header/header";
import { Link, useRouter } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userId");
    if (token) {
      router.push("/account");
    }
  }, [router]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://impact-server-side-production.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { userId } = data;
        localStorage.setItem("userId", userId);
        router.push("/account");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("An error occurred during login");
    }
  };

  return (
    <div>
      <Header transparent={false} />
      <div className="flex items-center justify-center my-[50px] bg-white px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="bg-[#F4F4F4] w-[100%] max-w-[680px] flex flex-col items-center shadow-md">
          <h2 className="text-[36px] md:text-[54px] font-[700] pt-[30px] text-[#272727] text-center">
            Login
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full px-[20px] pt-[40px] pb-[10px] max-w-[450px]  bg-[#F4F4F4]"
          >
            <div className="mb-[30px]">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent border-[#cbc9c9] placeholder-[#B2B2B2]  focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
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

            <Link 
              aria-label="Forgot password"
             href="/" className="underline text-[14px] text-[#969696] ">
              Forgot your password?
            </Link>
            <button
              aria-label="Login"
              type="submit"
              className="w-full mt-[20px] py-[15px] font-[700] px-[45px] hover:text-[#3C619E] border-solid border-[2px] border-transparent hover:border-[#3C619E] hover:border-[2px] hover:border-solid hover:bg-transparent bg-[#3C619E] text-[18px] text-white focus:outline-none transition-colors duration-300 ease-in-out "
            >
              Login
            </button>
          </form>

          <div className="flex flex-col gap-[20px] w-full px-[54px] pb-[50px]">
            <Link 
              aria-label="Signup"
              href="/signup"
              className="underline text-[14px] text-center text-[#969696] "
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
