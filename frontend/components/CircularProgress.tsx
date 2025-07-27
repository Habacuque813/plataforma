// components/CircularProgress.tsx
"use client";
import React from "react";

interface CircularProgressProps {
  percentage: number;
  label: string;
}

export default function CircularProgress({
  percentage,
  label,
}: CircularProgressProps) {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <figure className="flex flex-col items-center bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300">
      <svg height={radius * 2} width={radius * 2} aria-label={label}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#3b82f6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-lg font-semibold fill-gray-800"
        >
          {percentage}%
        </text>
      </svg>
      <figcaption className="mt-2 text-gray-600">{label}</figcaption>
    </figure>
  );
}
