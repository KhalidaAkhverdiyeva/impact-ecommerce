"use client";
import { Header } from "@/components/Layout/Header/header";
import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const { setUserId } = useUser();
  //   const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     try {
  //       const response = await fetch("http://localhost:3001/api/auth/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ username, password }),
  //         credentials: "include",
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         const { userId } = data;
  //         console.log(userId, "User id from response");
  //         localStorage.setItem("userId", userId);
  //         setUserId(userId);

  //         router.push("/");
  //       } else {
  //         console.error("Login failed:", response.statusText);
  //         alert("Login failed");
  //       }
  //     } catch (error) {
  //       console.error("An error occurred:", error);
  //       alert("An error occurred. Please try again.");
  //     }
  //   };

  //   const handleCreateAccount = () => {
  //     router.push("/register");
  //   };

  return (
    <div>
      <Header transparent={false} />
      <div className="flex items-center justify-center my-[50px] bg-white px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="bg-[#F4F4F4] w-[100%] max-w-[680px] flex flex-col items-center shadow-md">
          <h2 className="text-[36px] md:text-[54px] font-[700] pt-[30px] text-[#272727] text-center">
            Sign up
          </h2>
          <form
            // onSubmit={handleSubmit}
            className="w-full px-[20px] pt-[40px] pb-[10px] max-w-[450px]  bg-[#F4F4F4]"
          >
            <div className="mb-[30px]">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={(e) => setUsername(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent border-[#cbc9c9] placeholder-[#B2B2B2]  focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-[30px]">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={(e) => setUsername(e.target.value)}
                className="block text-[16px] w-full px-[20px] py-[15px] border bg-transparent border-[#cbc9c9] placeholder-[#B2B2B2]  focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-[30px]">
              <input
                type="email"
                id="email"
                value={username}
                placeholder="E-mail"
                onChange={(e) => setUsername(e.target.value)}
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

            <button
              type="submit"
              className="w-full mt-[20px] py-[15px] font-[700] px-[45px] hover:text-[#3C619E] border-solid border-[2px] border-transparent hover:border-[#3C619E] hover:border-[2px] hover:border-solid hover:bg-transparent bg-[#3C619E] text-[18px] text-white focus:outline-none transition-colors duration-300 ease-in-out "
            >
              Create account
            </button>
          </form>

          <div className="flex flex-col gap-[20px] w-full px-[54px] pb-[50px]">
            <Link
              href="/login"
              className="underline text-[14px] text-center text-[#969696] "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* <ShopifySection /> */}
    </div>
  );
};

export default Signup;
