// components/LayoutWrapper.tsx
"use client";
import React, { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
}
