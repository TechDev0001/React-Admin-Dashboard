import { useState } from "react";
import {
  Bell,
  AlertTriangle,
  Info,
  Mail,
  CheckCircle,
} from "lucide-react";
import clsx from "clsx";

// Dummy Notifications Data
const initialNotifications = [
  {
    id: 1,
    type: "System Alert",
    message: "Scheduled maintenance on June 30th at 2:00 AM.",
    timestamp: "2025-06-21T05:00:00Z",
    icon: <AlertTriangle className="text-red-600" />,
    category: "system",
    read: false,
  },
  {
    id: 2,
    type: "Order Update",
    message: "Order #98123 has been delivered.",
    timestamp: "2025-06-21T01:00:00Z",
    icon: <Bell className="text-blue-500" />,
    category: "order",
    read: true,
  },
  {
    id: 3,
    type: "Marketing",
    message: "New summer sale campaign launched!",
    timestamp: "2025-06-20T10:00:00Z",
    icon: <Mail className="text-green-600" />,
    category: "marketing",
    read: false,
  },
  {
    id: 4,
    type: "User Report",
    message: "User JohnDoe reported an issue with checkout.",
    timestamp: "2025-06-19T08:30:00Z",
    icon: <Info className="text-yellow-500" />,
    category: "user",
    read: false,
  },
  {
    id: 5,
    type: "Security Alert",
    message: "New login from unrecognized device.",
    timestamp: "2025-06-18T12:15:00Z",
    icon: <AlertTriangle className="text-orange-600" />,
    category: "security",
    read: true,
  },
];

// Categories for filtering
const categories = [
  "all",
  "system",
  "order",
  "marketing",
  "user",
  "security",
];

// Format time difference
const timeAgo = (date) => {
  const now = new Date();
  const then = new Date(date);
  const diff = Math.floor((now - then) / 1000); // seconds

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

// Notification Item Component
const NotificationItem = ({ item, onMarkRead }) => (
  <div
    className={clsx(
      "flex items-start gap-4 p-4 transition cursor-pointer",
      !item.read ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-50",
      "border-b last:border-none"
    )}
    onClick={() => onMarkRead(item.id)}
  >
    <div className="text-2xl shrink-0">{item.icon}</div>
    <div className="flex-1">
      <p className="font-semibold text-gray-800 flex items-center gap-2">
        {item.type}
        {!item.read && (
          <span className="text-[10px] text-white bg-blue-500 px-2 py-[2px] rounded-full">
            NEW
          </span>
        )}
      </p>
      <p className="text-sm text-gray-600">{item.message}</p>
    </div>
    <div className="text-xs text-gray-500 min-w-[70px] text-right">
      {timeAgo(item.timestamp)}
    </div>
  </div>
);

// Main Page Component
export default function NotificationPage() {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(initialNotifications);

  const filtered = filter === "all"
    ? items
    : items.filter((n) => n.category === filter);

  const handleMarkRead = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <span className="text-sm text-gray-500">
            You have {items.filter((n) => !n.read).length} unread
          </span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={clsx(
                "px-4 py-1 text-sm rounded-full",
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="rounded border divide-y">
          {filtered.length ? (
            filtered.map((item) => (
              <NotificationItem
                key={item.id}
                item={item}
                onMarkRead={handleMarkRead}
              />
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-500">
              No notifications in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
