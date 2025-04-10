"use client";
import { Header } from "@/components/Layout/Header/header";
import { useRouter } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosLogOut } from "react-icons/io";
import Image from "next/image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
}

const Accountant: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          phoneNumber: firebaseUser.phoneNumber,
        });
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Failed to logout");
    }
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
                  user.photoURL ||
                  "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                }
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {user.displayName || "Username"}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-lg text-gray-800">
                  {user.phoneNumber || "Not provided"}
                </p>
              </div>
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
