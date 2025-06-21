import {
  Home,
  Users,
  ShoppingCart,
  Boxes,
  LineChart,
  Settings,
  Bell,
  MessageSquare,
  LayoutDashboard,
  DollarSign,
  Shield,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-950 text-white p-4 hidden md:block min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        {/* <Link to="/" className="flex items-center space-x-2 hover:text-gray-400">
          <Home /> <span>Home</span>
        </Link> */}
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-400">
          <LayoutDashboard /> <span>Dashboard</span>
        </Link>
        <Link to="/users" className="flex items-center space-x-2 hover:text-gray-400">
          <Users /> <span>Users</span>
        </Link>
        <Link to="/products" className="flex items-center space-x-2 hover:text-gray-400">
          <Boxes /> <span>Products</span>
        </Link>
        <Link to="/orders" className="flex items-center space-x-2 hover:text-gray-400">
          <ShoppingCart /> <span>Orders</span>
        </Link>
        <Link to="/sales" className="flex items-center space-x-2 hover:text-gray-400">
          <DollarSign /> <span>Sales</span>
        </Link>
        <Link to="/analytics" className="flex items-center space-x-2 hover:text-gray-400">
          <LineChart /> <span>Analytics</span>
        </Link>
        <Link to="/messages" className="flex items-center space-x-2 hover:text-gray-400">
          <MessageSquare /> <span>Messages</span>
        </Link>
        <Link to="/notifications" className="flex items-center space-x-2 hover:text-gray-400">
          <Bell /> <span>Notifications</span>
        </Link>
        <Link to="/settings" className="flex items-center space-x-2 hover:text-gray-400">
          <Settings /> <span>Settings</span>
        </Link>
        <Link to="/security" className="flex items-center space-x-2 hover:text-gray-400">
          <Shield /> <span>Security</span>
        </Link>
        <Link to="/login" className="flex items-center space-x-2 hover:text-gray-400">
          <LogOut /> <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
