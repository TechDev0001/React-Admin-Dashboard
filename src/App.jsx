import React, {lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load only the Dashboard
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
// const Home = React.lazy(() => import('./pages/Home/Home'));

const Analytics = lazy(() => import("./pages/Analytics"));
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routers/PrivateRoute";
import Sales from "./pages/Sales";
// import Analytics from "./pages/Analytics";
import Message from "./pages/Message";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Security from "./pages/Security";
// import Home from "./pages/Home/Home";

// Layout component
const Layout = ({ children }) => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="overflow-y-auto">{children}</main>
    </div>
  </div>
);



// Loader fallback component
const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <p className="text-gray-800">Loading...</p>
    {console.log("loding....")}
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />


        <Route
          path="/dashbord"
          element={
            // <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            // </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Layout>
                <Users />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Layout>
                <Products />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Layout>
                <Orders />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <PrivateRoute>
              <Layout>
                <Sales />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <Layout>
                <Analytics />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <Layout>
                <Message />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <Layout>
                <Notifications />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Layout>
                <Settings />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/security"
          element={
            <PrivateRoute>
              <Layout>
                <Security />
              </Layout>
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/home"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />
        */}
      </Routes>

    </Suspense>
  );
}
