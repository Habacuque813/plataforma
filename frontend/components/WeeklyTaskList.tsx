interface Task {
  id: number;
  title: string;
}

interface DayTasks {
  day: string;
  tasks: Task[];
}

interface Props {
  week: DayTasks[]; // ❗ Remova o `?` e defina como obrigatório
}

export default function WeeklyTaskList({ week }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {week.map(({ day, tasks }) => (
        <div key={day} className="bg-white rounded-md shadow p-3">
          <h3 className="font-semibold text-lg mb-2">{day}</h3>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
