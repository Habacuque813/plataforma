import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-5 flex items-center">
      <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
      <div className="ml-4">
        <dt className="text-sm font-medium text-gray-500">{title}</dt>
        <dd className="text-2xl font-semibold text-gray-900">{value}</dd>
      </div>
    </div>
  );
}
