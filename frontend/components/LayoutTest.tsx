"use client";
import React, { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function LayoutTest({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document
      .querySelector(".js-sidebar-toggle")
      ?.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-mini");
      });
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
