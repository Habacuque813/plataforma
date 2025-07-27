// components/WelcomeBanner.tsx
"use client";
import React from "react";

interface WelcomeBannerProps {
  userName: string;
  message: string;
}

export default function WelcomeBanner({
  userName,
  message,
}: WelcomeBannerProps) {
  return (
    <section
      className="bg-white rounded-lg shadow p-6 mb-8 transform hover:shadow-xl transition-shadow duration-300"
      aria-labelledby="welcome-title"
    >
      <h1 id="welcome-title" className="text-3xl font-bold text-gray-800 mb-2">
        Bem-vindo de volta, {userName}!
      </h1>
      <p className="text-gray-600">{message}</p>
    </section>
  );
}
