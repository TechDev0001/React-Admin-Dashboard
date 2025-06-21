const messages = {
  unread: [
    {
      sender: "Diana",
      title: "Your Daily Work Summary",
      preview: "And they'd probably do a lot of damage to an...",
      date: "Mar 26",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      labels: ["NEW"],
      starred: true
    },
    {
      sender: "Unsplash Team",
      title: "Get involved for International Women's Day - with link 🙋",
      preview: "The link below is now clickable for Chrome users…",
      date: "Dec 16",
      avatar: "https://avatars.githubusercontent.com/u/5827607?v=4",
      labels: ["Winter", "Coffee"],
      starred: false
    },
    {
      sender: "Goodreads",
      title: "Goodreads Newsletter: March 5, 2019",
      preview: "The most anticipated books of spring, a rocking read, and more!",
      date: "March 5",
      avatar: "https://avatars.githubusercontent.com/u/21037?v=4",
      labels: [],
      starred: false
    }
  ],
  others: [
    {
      sender: "GitHub",
      title: "[GitHub] Subscribed to technext/photogallery notifications",
      preview: "Hey there, we’re just writing to let you know…",
      date: "11:50AM",
      avatar: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      labels: [],
      starred: true
    },
    {
      sender: "Coursera",
      title: "Recommended: Server-side Dev with NodeJS, Express and MongoDB",
      preview: "We combed our catalog and found courses…",
      date: "Mar 3",
      avatar: "https://pbs.twimg.com/profile_images/1565328525283862528/vgEzHEoC_400x400.jpg",
      labels: ["syllabus"],
      starred: false
    },
    {
      sender: "Spectrum",
      title: "Spectrum Weekly Digest: ZEIT watercooler, Escape Room!",
      preview: "You didn’t gain any reputation last week. Reputation is an...",
      date: "Feb 21",
      avatar: "https://avatars.githubusercontent.com/u/32166695?v=4",
      labels: [],
      starred: false
    }
  ]
};

const MessageItem = ({ item }) => (
  <div className="flex items-start space-x-4 py-3 border-b last:border-b-0">
    <input type="checkbox" className="mt-1" />
    <img src={item.avatar} alt={item.sender} className="w-8 h-8 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center gap-2">
        {item.starred && <span className="text-yellow-500">★</span>}
        <span className="font-semibold">{item.sender}</span>
        {item.labels.map((label, i) => (
          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {label}
          </span>
        ))}
      </div>
      <div className="text-sm">
        <span className="font-medium">{item.title}</span> –{" "}
        <span className="text-gray-600">{item.preview}</span>
      </div>
    </div>
    <div className="text-xs text-gray-500 min-w-[60px] text-right">{item.date}</div>
  </div>
);

export const Messages = () => (
  <section className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-4">Messages</h2>

    <div className="space-y-4">
      <div>
        <h3 className="text-gray-600 font-medium mb-2">Unread</h3>
        <div className="divide-y">
          {messages.unread.map((item, index) => (
            <MessageItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-gray-600 font-medium mt-4 mb-2">Everything else</h3>
        <div className="divide-y">
          {messages.others.map((item, index) => (
            <MessageItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
