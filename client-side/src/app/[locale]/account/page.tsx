"use client";
import { Header } from "@/components/Layout/Header/header";
import { useRouter } from "@/i18n/routing";
import React from "react";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  orderHistory: string[];
}

const Accountant: React.FC = () => {
  const router = useRouter();

  const user: UserDetails = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 234 567 8901",
    address: "123 Main Street, Springfield, IL 62704",
    orderHistory: [
      "Order #12345 - Status: Delivered",
      "Order #12346 - Status: Shipped",
      "Order #12347 - Status: Pending",
    ],
  };

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

        <div className=" mt-10 bg-white my-[50px] p-6 border">
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
