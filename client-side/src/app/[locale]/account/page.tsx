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
          const data: User = await response.json(); // Assert that the response conforms to the User type
          setUser(data);
        } else {
          console.error("Failed to fetch user data");
          alert("Failed to load user data.");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
        alert("An error occurred while fetching your data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
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
        <div className="flex justify-end mt-6 max-w-[600px] mx-auto">
          <button
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
