export default function NotificationItem({notification}) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:scale-[1.02] transition">
      <Icon name={notification.type} />
      <div>
        <h4 className="font-bold">{notification.title}</h4>
        <p>{notification.message}</p>
        <span className="text-xs text-gray-400">{notification.time}</span>
      </div>
    </div>
  )
}
