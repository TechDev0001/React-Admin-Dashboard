import { useState } from "react";

const messages = {
  unread: [
    {
      sender: "Diana",
      title: "Your Daily Work Summary",
      preview: "And they'd probably do a lot of damage to an...",
      date: "Mar 26",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      labels: ["NEW"],
      starred: true,
    },
    {
      sender: "Unsplash Team",
      title: "Get involved for International Women's Day - with link 🙋",
      preview: "The link below is now clickable for Chrome users…",
      date: "Dec 16",
      avatar: "https://avatars.githubusercontent.com/u/5827607?v=4",
      labels: ["Winter", "Coffee"],
      starred: false,
    },
    {
      sender: "Goodreads",
      title: "Goodreads Newsletter: March 5, 2019",
      preview: "The most anticipated books of spring, a rocking read, and more!",
      date: "March 5",
      avatar: "https://avatars.githubusercontent.com/u/21037?v=4",
      labels: [],
      starred: false,
    },
  ],
  others: [
    {
      sender: "GitHub",
      title: "[GitHub] Subscribed to technext/photogallery notifications",
      preview: "Hey there, we’re just writing to let you know…",
      date: "11:50AM",
      avatar: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      labels: [],
      starred: true,
    },
    {
      sender: "Coursera",
      title: "Recommended: Server-side Dev with NodeJS, Express and MongoDB",
      preview: "We combed our catalog and found courses…",
      date: "Mar 3",
      avatar: "https://pbs.twimg.com/profile_images/1565328525283862528/vgEzHEoC_400x400.jpg",
      labels: ["Syllabus"],
      starred: false,
    },
    {
      sender: "Spectrum",
      title: "Spectrum Weekly Digest: ZEIT watercooler, Escape Room!",
      preview: "You didn’t gain any reputation last week. Reputation is an...",
      date: "Feb 21",
      avatar: "https://avatars.githubusercontent.com/u/32166695?v=4",
      labels: [],
      starred: false,
    },
  ],
};

const MessageItem = ({ item }) => (
  <div className="flex items-start space-x-4 py-4 hover:bg-gray-50 px-2 rounded-lg transition">
    <input type="checkbox" className="mt-1" />
    <img
      src={item.avatar}
      alt={item.sender}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="flex-1">
      <div className="flex flex-wrap items-center gap-2">
        {item.starred && <span className="text-yellow-500">★</span>}
        <span className="font-semibold text-gray-800">{item.sender}</span>
        {item.labels.map((label, i) => (
          <span
            key={i}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="text-sm mt-1">
        <span className="font-medium text-gray-700">{item.title}</span> –{" "}
        <span className="text-gray-500">{item.preview}</span>
      </div>
    </div>
    <div className="text-xs text-gray-400 min-w-[70px] text-right">{item.date}</div>
  </div>
);

const Message = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>

        <section className="space-y-8">
          {/* Unread */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-700">Unread</h2>
            <div className="divide-y divide-gray-200">
              {messages.unread.map((item, index) => (
                <MessageItem key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Others */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-700">Everything else</h2>
            <div className="divide-y divide-gray-200">
              {messages.others.map((item, index) => (
                <MessageItem key={index} item={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
