const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    role: "Admin",
    joined: "Jan 2, 2024",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Pending",
    role: "Editor",
    joined: "Feb 15, 2024",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Alex Brown",
    email: "alex@example.com",
    status: "Banned",
    role: "Viewer",
    joined: "Mar 10, 2024",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    status: "Active",
    role: "Admin",
    joined: "Apr 1, 2024",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const StatusBadge = ({ status }) => {
  const base = "px-2 py-1 text-xs font-medium rounded-full";
  const styles = {
    Active: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Banned: "bg-red-100 text-red-700",
  };
  return <span className={`${base} ${styles[status]}`}>{status}</span>;
};

export const UserSection = () => (
  <section className="bg-white p-4 sm:p-6 rounded shadow w-full col-span-full">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
      <h2 className="text-lg sm:text-xl font-bold">Users</h2>
      <span className="text-sm text-gray-500">{users.length} total users</span>
    </div>

    {/* Desktop Table */}
    <div className="hidden md:block">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 font-semibold">User</th>
            <th className="py-2 px-4 font-semibold">Email</th>
            <th className="py-2 px-4 font-semibold">Role</th>
            <th className="py-2 px-4 font-semibold">Status</th>
            <th className="py-2 px-4 font-semibold">Joined</th>
            <th className="py-2 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 flex items-center gap-3 whitespace-nowrap">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{user.name}</span>
              </td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                <StatusBadge status={user.status} />
              </td>
              <td className="py-2 px-4">{user.joined}</td>
              <td className="py-2 px-4">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-4">
      {users.map((user, index) => (
        <div key={index} className="border rounded p-4 shadow-sm bg-white">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Joined:</strong> {user.joined}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <StatusBadge status={user.status} />
            <div className="text-sm">
              <button className="text-blue-600 hover:underline mr-2">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
