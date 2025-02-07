import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container ">
        <Header />
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10 flex items-center justify-center gap-2">
        <span>Made by Dhruv Kumar</span>
        <img src="/name.jpg" className="h-10 w-10 rounded-full" alt="Profile" />
      </div>
    </div>
  );
};

export default AppLayout;
