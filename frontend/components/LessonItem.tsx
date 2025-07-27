// components/LessonItem.tsx
"use client";
import React from "react";

interface LessonItemProps {
  title: string;
  schedule: string;
  instructor?: string;
  date?: string;
}

export default function LessonItem({
  title,
  schedule,
  instructor,
  date,
}: LessonItemProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-3 flex justify-between items-center">
      <div>
        <h4 className="text-gray-800 font-medium">{title}</h4>
        <p className="text-gray-500 text-sm">
          {schedule} {instructor ? `— ${instructor}` : ""}{" "}
          {date ? `, ${date}` : ""}
        </p>
      </div>
      <svg
        className="h-6 w-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
