import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li><a href="/" className="text-blue-600">Home</a></li>
          <li><a href="/student" className="text-blue-600">Aluno</a></li>
          <li><a href="/teacher" className="text-blue-600">Professor</a></li>
          <li><a href="/admin" className="text-blue-600">Admin</a></li>
        </ul>
      </nav>
    </aside>
  )
}
