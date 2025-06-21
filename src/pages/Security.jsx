import { useState } from "react";
import { Lock, Shield, EyeOff, AlertTriangle, KeyRound } from "lucide-react";

const Security = () => {
  const [twoFA, setTwoFA] = useState(false);
  const [sessionLogs] = useState([
    {
      device: "Chrome on Windows",
      location: "New Delhi, India",
      ip: "192.168.1.10",
      time: "Today at 09:24 AM",
    },
    {
      device: "Firefox on MacOS",
      location: "Mumbai, India",
      ip: "192.168.1.56",
      time: "Yesterday at 08:13 PM",
    },
  ]);

  const ToggleSwitch = ({ enabled, setEnabled }) => (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${enabled ? 'bg-green-500' : ''}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${enabled ? 'translate-x-6' : ''}`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Security Settings</h1>

        {/* Password Settings */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800"><KeyRound size={20} /> Change Password</h2>
          <input type="password" placeholder="Current Password" className="w-full border p-2 rounded" />
          <input type="password" placeholder="New Password" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Confirm New Password" className="w-full border p-2 rounded" />
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update Password</button>
        </section>

        {/* Two-Factor Auth */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800"><Shield size={20} /> Two-Factor Authentication (2FA)</h2>
          <div className="flex items-center justify-between">
            <span>Enable 2FA for extra security</span>
            <ToggleSwitch enabled={twoFA} setEnabled={setTwoFA} />
          </div>
          {twoFA && <p className="text-sm text-green-600">2FA is currently enabled.</p>}
        </section>

        {/* Recent Login Activity */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800"><Lock size={20} /> Recent Login Activity</h2>
          <ul className="divide-y">
            {sessionLogs.map((log, index) => (
              <li key={index} className="py-2 text-sm text-gray-700">
                <div className="font-medium">{log.device}</div>
                <div className="text-gray-500">{log.location} • {log.ip} • {log.time}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Security Warnings */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-red-600"><AlertTriangle size={20} /> Security Alerts</h2>
          <p className="text-sm text-gray-600 mt-2">
            New login attempt detected from an unrecognized device. If this wasn't you, please change your password immediately.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Security;