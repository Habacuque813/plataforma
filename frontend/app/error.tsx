// frontend/app/error.tsx
"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Oops… Algo deu errado</h1>
      <pre className="bg-gray-100 p-4 rounded mb-4">{error.message}</pre>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Tentar novamente
      </button>
    </div>
  );
}
