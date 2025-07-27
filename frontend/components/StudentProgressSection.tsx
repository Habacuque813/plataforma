export default function StudentProgressSection({ students }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {students.map((student) => (
        <div key={student.id} className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">{student.name}</h2>
          <p className="text-sm text-gray-500">
            Progresso: {student.progress}%
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${student.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
