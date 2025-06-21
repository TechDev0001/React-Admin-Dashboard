// import { useEffect, useState } from "react";
import API from "../utils/api";
import { Search, UserPlus } from "lucide-react";



const  users = [
  {
    id: 1,
    name: "Shubham Kumar",
    email: "shubham@gmail.com",
    status: "active",
    createdAt: "2023-11-01",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    email: "rohit@gmail.com",
    status: "new",
    createdAt: "2024-06-10",
  },
  {
    id: 3,
    name: "Anita Mehra",
    email: "anita@gmail.com",
    status: "banned",
    createdAt: "2022-08-21",
  },
  {
    id: 4,
    name: "Amit Singh",
    email: "amit@gmail.com",
    status: "active",
    createdAt: "2023-01-15",
  },
  {
    id: 5,
    name: "Priya Nair",
    email: "priya@gmail.com",
    status: "new",
    createdAt: "2024-06-18",
  },
  {
    id: 6,
    name: "Manoj Verma",
    email: "manoj@gmail.com",
    status: "banned",
    createdAt: "2021-12-30",
  },
];


const Users = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   API.get("/users").then((res) => setUsers(res.data));
  // }, []);



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Users</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage platform users and permissions</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-1">
            <UserPlus size={16} /> Add User
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <UserStat title="Total Users" value="1,236" color="blue" />
        <UserStat title="Active Users" value="1,050" color="green" />
        <UserStat title="New This Month" value="98" color="purple" />
        <UserStat title="Banned Users" value="12" color="red" />
      </div>

      {/* Search & Filters */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by name or email"
            className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={18} />
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-auto bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm">
            <tr>
              <th className="px-4 py-3 text-left font-medium">ID</th>
              <th className="px-4 py-3 text-left font-medium">Name</th>
              <th className="px-4 py-3 text-left font-medium">Email</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Joined</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm bg-[#dcdcdf] divide-y divide-gray-100 dark:divide-gray-700">
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-600"
                        : user.status === "banned"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.status || "inactive"}
                  </span>
                </td>
                <td className="px-4 py-2">{user.createdAt?.slice(0, 10) || "—"}</td>
                <td className="px-4 py-2 text-right">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center px-4 py-6 text-gray-500 dark:text-gray-400">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

// Mini Card Component
const UserStat = ({ title, value, color = "blue" }) => {
  const colorMap = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    purple: "text-purple-600 bg-purple-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <div className={`rounded-lg p-4 ${colorMap[color]} bg-opacity-20`}>
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      <p className={`text-xl font-bold mt-1 ${colorMap[color]}`}>{value}</p>
    </div>
  );
};
