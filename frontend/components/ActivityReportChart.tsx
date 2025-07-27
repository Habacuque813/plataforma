"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function ActivityReportChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    new Chart(ref.current, {
      type: "bar",
      data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        datasets: [
          {
            label: "Atividades",
            data: [30, 50, 40, 60, 70, 50, 80],
            backgroundColor: "#1cc88a",
          },
        ],
      },
      options: { responsive: true },
    });
  }, []);

  return <canvas ref={ref} style={{ height: 200 }} />;
}
