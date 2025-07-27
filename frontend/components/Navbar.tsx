"use client";
import React, { useEffect } from "react";
import feather from "feather-icons";

export function Navbar() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="navbar-collapse collapse">
        {/* aqui seu Header.tsx ou avatar, notificações */}
      </div>
    </nav>
  );
}
