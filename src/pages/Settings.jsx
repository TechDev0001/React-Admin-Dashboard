import { useState } from "react";
import {
  User, Lock, Bell, Shield, CreditCard, Link2, Trash2, Mail,
  Smartphone, EyeOff, Moon, Globe
} from "lucide-react";

// Toggle Component
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

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [dataShare, setDataShare] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Settings</h1>

        {/* Profile Section */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><User size={20} /> Profile Information</h2>
          <input placeholder="Full Name" className="w-full border p-2 rounded" />
          <input placeholder="Email Address" className="w-full border p-2 rounded" />
          <input placeholder="Phone Number" className="w-full border p-2 rounded" />
        </section>

        {/* Security */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Lock size={20} /> Account Security</h2>
          <input type="password" placeholder="Current Password" className="w-full border p-2 rounded" />
          <input type="password" placeholder="New Password" className="w-full border p-2 rounded" />
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Shield size={20} /> Enable 2-Factor Authentication</span>
            <ToggleSwitch enabled={twoFA} setEnabled={setTwoFA} />
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Bell size={20} /> Notification Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Mail size={18} /> Email Notifications</span>
            <ToggleSwitch enabled={emailNotif} setEnabled={setEmailNotif} />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Smartphone size={18} /> SMS Notifications</span>
            <ToggleSwitch enabled={smsNotif} setEnabled={setSmsNotif} />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Bell size={18} /> Push Notifications</span>
            <ToggleSwitch enabled={pushNotif} setEnabled={setPushNotif} />
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><EyeOff size={20} /> Privacy Settings</h2>
          <div className="flex items-center justify-between">
            <span>Make my profile visible to others</span>
            <ToggleSwitch enabled={profileVisible} setEnabled={setProfileVisible} />
          </div>
          <div className="flex items-center justify-between">
            <span>Allow data sharing for personalization</span>
            <ToggleSwitch enabled={dataShare} setEnabled={setDataShare} />
          </div>
        </section>

        {/* Payment Settings */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><CreditCard size={20} /> Payment Settings</h2>
          <input placeholder="Default Payment Method" className="w-full border p-2 rounded" />
          <input placeholder="Billing Address" className="w-full border p-2 rounded" />
        </section>

        {/* Connected Accounts */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Link2 size={20} /> Connected Accounts</h2>
          <p className="text-sm text-gray-600">Manage social login options connected to your account.</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Disconnect Google</button>
            <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Disconnect Facebook</button>
          </div>
        </section>

        {/* Appearance */}
        <section className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Moon size={20} /> Appearance & Language</h2>
          <div className="flex items-center justify-between">
            <span>Enable Dark Mode</span>
            <ToggleSwitch enabled={darkMode} setEnabled={setDarkMode} />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Globe size={18} /> Language</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border p-2 rounded"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>German</option>
            </select>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-white p-6 rounded shadow space-y-4 border border-red-300">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-red-600"><Trash2 size={20} /> Danger Zone</h2>
          <p className="text-sm text-red-600">Deleting your account is permanent and cannot be undone.</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete My Account</button>
        </section>
      </div>
    </div>
  );
}
