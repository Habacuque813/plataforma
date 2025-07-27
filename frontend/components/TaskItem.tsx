interface Task {
  title: string;
  status: "feito" | "pendente" | "atrasado";
}

export function TaskItem({ task }: { task: Task }) {
  const getColor = () => {
    switch (task.status) {
      case "feito":
        return "bg-green-100 border-green-400";
      case "pendente":
        return "bg-yellow-100 border-yellow-400";
      case "atrasado":
        return "bg-red-100 border-red-400";
    }
  };

  return (
    <li
      className={`flex items-center justify-between border-l-4 p-2 rounded transition duration-300 ${getColor()}`}
    >
      <span>{task.title}</span>
      <input
        type="checkbox"
        checked={task.status === "feito"}
        readOnly
        className="accent-green-600 scale-125"
      />
    </li>
  );
}
