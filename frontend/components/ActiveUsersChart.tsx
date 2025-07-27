"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function ActiveUsersChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    new Chart(ref.current, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
        datasets: [
          {
            label: "Usuários",
            data: [50, 75, 150, 100, 200],
            borderColor: "#4e73df",
            fill: false,
          },
        ],
      },
      options: { responsive: true },
    });
  }, []);

  return <canvas ref={ref} style={{ height: 350 }} />;
}
