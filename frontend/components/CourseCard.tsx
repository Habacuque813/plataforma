import { fetchCourses } from "../lib/api_test";

export default async function DashboardPage() {
  const courses = await fetchCourses("student");

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Cursos em andamento</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 p-4 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                Autor: {course.author}
              </p>
            </div>

            <div>
              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-2"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-right text-sm mt-2">
                {course.progress}% concluído
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
