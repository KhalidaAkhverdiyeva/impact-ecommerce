/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Header } from "@/components/Layout/Header/header";
import { useRouter } from "@/i18n/routing";
import React, { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
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
          `https://impact-server-side-production.up.railway.app/api/users/${userId}`,
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
      } catch (err) {
        setError("An error occurred while fetching your data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <div>
      <Header transparent={false} />
      <div className="max-w-[600px] mx-auto">
        {error && (
          <div className="bg-red-100 text-red-500 p-4 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="flex justify-end mt-6 max-w-[600px] mx-auto">
          <button
            aria-label="Logout"
            onClick={handleLogout}
            className="inline bg-[#F4F4F4] text-[#272727] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Logout
          </button>
        </div>

        <div className="mt-10 bg-white my-[50px] p-6 border">
          <h1 className="text-2xl font-bold text-[#272727] mb-4">Profile</h1>
          <div className="space-y-3">
            <div>
              <span className="block text-sm font-medium text-gray-500">
                Name:
              </span>
              <span className="text-lg text-gray-800">{user.name}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">
                Email:
              </span>
              <span className="text-lg text-gray-800">{user.email}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">
                Phone:
              </span>
              <span className="text-lg text-gray-800">{user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountant;
