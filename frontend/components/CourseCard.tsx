import React from 'react'

type CourseCardProps = {
  title: string
  description: string
}

export default function CourseCard({ title, description }: CourseCardProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
