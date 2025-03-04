"use client";
import { Header } from "@/components/Layout/Header/header";
import { useRouter } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosLogOut } from "react-icons/io";
import Image from "next/image";

interface User {
  name: string;
  email: string;
  phone: string;
  avatar?: string; // Optional avatar field
}

const Accountant: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/users/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data: User = await response.json();
          setUser(data);
        } else {
          setError("Failed to load user data");
          alert("Failed to load user data.");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("An error occurred while fetching your data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header transparent={false} />
      <div className="max-w-4xl mx-auto py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[30px] p-8 space-y-6 shadow-xl"
        >
          {/* Profile Header */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
              <Image
                width={112}
                height={112}
                src={
                  user.avatar ||
                  "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                }
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {user.name || "Username"}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-lg text-gray-800">{user.phone}</p>
              </div>
              {/* You can add other info here */}
            </div>
          </div>

          {/* Profile Bio or Extra Information */}
          <div>
            <p className="text-sm font-medium text-gray-500">Bio</p>
            <p className="text-lg text-gray-800">
              A brief description about the user goes here. This can be an
              additional information section that helps the user personalize
              their profile page.
            </p>
          </div>
          {/* Logout Button */}
          <div className="flex justify-end">
            <button
              aria-label="Logout"
              onClick={handleLogout}
              className="bg-[#424140] flex gap-[5px] items-center text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none transition duration-300"
            >
              Logout
              <IoIosLogOut size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accountant;
