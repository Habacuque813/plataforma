"use  client";
import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  delta: string;
  positive?: boolean;
}

export function DashboardCard({
  title,
  value,
  delta,
  positive = true,
}: DashboardCardProps) {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-4">{title}</h5>
          <h1 className="mt-1 mb-3">{value}</h1>
          <div className="mb-1">
            <span className={positive ? "text-success" : "text-danger"}>
              {delta}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
