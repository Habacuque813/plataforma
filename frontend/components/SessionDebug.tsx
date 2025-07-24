"use client";
import { useSession } from "next-auth/react";

export default function SessionDebug() {
  const { data: session, status } = useSession();

  return (
    <pre className="bg-gray-100 p-4 text-sm rounded">
      <strong>Status:</strong> {status}
      {"\n"}
      <strong>Session:</strong> {JSON.stringify(session, null, 2)}
    </pre>
  );
}
