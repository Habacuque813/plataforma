// components/MediaFileCard.tsx
"use client";
import React from "react";

interface MediaFileCardProps {
  course: string;
  filename: string;
  action: string;
  members: number;
  size: string;
}

export default function MediaFileCard({
  course,
  filename,
  action,
  members,
  size,
}: MediaFileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h5 className="text-gray-800 font-semibold">{course}</h5>
          <p className="text-gray-500 text-sm">{filename}</p>
        </div>
        <span className="text-sm text-blue-500">{action}</span>
      </div>
      <div className="mt-2 text-gray-600 text-sm">
        <span>{members} members</span> • <span>{size}</span>
      </div>
    </div>
  );
}
