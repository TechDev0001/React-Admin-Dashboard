import { Bell, AlertCircle, Megaphone, ShieldAlert } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "System Maintenance Scheduled",
    description: "Our servers will be updated on Sunday at 3:00 AM.",
    type: "System Alert",
    icon: <AlertCircle className="text-red-500" size={18} />,
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "New Marketing Campaign",
    description: "Launch your summer sale with our new email templates.",
    type: "Marketing",
    icon: <Megaphone className="text-blue-500" size={18} />,
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "User Report Received",
    description: "A user reported an issue with payment processing.",
    type: "User Report",
    icon: <ShieldAlert className="text-yellow-500" size={18} />,
    time: "Yesterday",
  },
];

const TypeBadge = ({ type }) => {
  const base = "text-xs px-2 py-1 rounded-full font-medium";
  const typeColors = {
    "System Alert": "bg-red-100 text-red-700",
    "Marketing": "bg-blue-100 text-blue-700",
    "User Report": "bg-yellow-100 text-yellow-800",
  };
  return <span className={`${base} ${typeColors[type]}`}>{type}</span>;
};

export const NotificationsSection = () => (
  <section className="bg-white p-6 rounded shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Notifications</h2>
      <span className="text-sm text-gray-500">{notifications.length} alerts</span>
    </div>

    <ul className="divide-y">
      {notifications.map((note) => (
        <li key={note.id} className="py-4 flex items-start gap-4">
          <div className="bg-gray-100 p-2 rounded-full">{note.icon}</div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-sm text-gray-800">{note.title}</h3>
              <span className="text-xs text-gray-400">{note.time}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{note.description}</p>
            <TypeBadge type={note.type} />
          </div>
        </li>
      ))}
    </ul>
  </section>
);
