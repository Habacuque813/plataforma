// components/StudentCard.tsx
"use client";
import React from "react";

interface StudentCardProps {
  name: string;
  avatarUrl?: string;
  progress: number;
}

export default function StudentCard({
  name,
  avatarUrl,
  progress,
}: StudentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <img
        src={avatarUrl || "/default-avatar.png"}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-gray-800 font-semibold">{name}</h3>
        <div className="mt-1">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
