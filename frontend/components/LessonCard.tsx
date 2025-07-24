type LessonCardProps = {
  title: string;
  completed: boolean;
};

export default function LessonCard({ title, completed }: LessonCardProps) {
  return (
    <div className={`p-2 border-b ${completed ? "bg-green-50" : ""}`}>
      {title}
    </div>
  );
}
