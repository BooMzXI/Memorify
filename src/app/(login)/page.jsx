
import React from "react";
import LoginPanel from "@/components/LoginPanel"
import Blur from "@/components/Blur";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-800">
          <Blur />
          <LoginPanel />
      </div>
    </>
  );
}