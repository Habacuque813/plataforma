// components/ActivityCard.tsx
"use client";
import React from "react";

interface ActivityCardProps {
  title: string;
  description: string;
}

export default function ActivityCard({
  title,
  description,
}: ActivityCardProps) {
  return (
    <article className="bg-white rounded-lg shadow p-6 transform hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-medium text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </article>
  );
}
