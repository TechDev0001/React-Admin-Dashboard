import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const { login } = useAuth();
  const nav = useNavigate();
    const adminEamil="admin@gmail.com";
    const userEmail="user@gmail.com";
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const success=await login({email, password}); // your AuthContext logic
      
      if(email===adminEamil){

        nav("/dashbord");
      }
      else if(email===userEmail){
        window.location.href = "https://ubiquitous-stardust-dda432.netlify.app/"; 
      }
      else{
      setError("Invalid email or password ")
      }
    } catch (err) {
      setError("Invalid email or password",err);
    }
  };

  const autoFillAdmin = () => {
    setEmail(adminEamil);
    setPassword("123456789");
  };

  const autoFillUser = () => {
    setEmail(userEmail);
    setPassword("123456789");
    
  };

  return (
    <div className="h-screen w-full bg-[#1A2238] flex items-center justify-center">
      <div className="bg-[#1E293B] text-white rounded-xl shadow-lg w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Login to account</h2>
        <p className="text-sm text-gray-400 mb-6">
          Access just only for Admin and design are reserved
        </p>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
            className="w-full p-3 rounded bg-gray-800 text-white border border-[#969696] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-800 text-white border border-[#969696] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-col justify-between">
            <a href="#" className="text-sm pb-3 text-blue-400 hover:underline">
              Forget password?
            </a>
            <div className="flex justify-between">
              <button
                type="button"
                // disabled
                onClick={autoFillUser}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 md:px-13 rounded transition"
              >
                User Login
              </button>
              <button
                type="button"
                onClick={autoFillAdmin}
                className="bg-[#db3309] hover:bg-red-500 text-white py-3 px-5 md:px-13 rounded transition"
              >
                Admin Login
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded"
          >
            Submit
          </button>
        </form>

        {/* Social Logins */}
        <div className="mt-6 text-center text-sm text-gray-400">Or login with</div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-[#3b5998] p-2 rounded-full"><FaFacebookF /></button>
          <button className="bg-[#db4437] p-2 rounded-full"><FaGoogle /></button>
          <button className="bg-[#0077b5] p-2 rounded-full"><FaLinkedinIn /></button>
        </div>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <a href="#" className="text-white font-semibold hover:underline">
            Register new account
          </a>
        </div>
      </div>
    </div>
  );
}
