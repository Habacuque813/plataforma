import NotificationItem from "./NotificationItem"

export default function NotificationFeed({notifications}){
    return (
        <div className="space-y-4 animate-fadeIn">
        {notifications.map((n, i) => (
            <NotificationItem key={i} notification={n}
        ))}
        </div>
    )
}
