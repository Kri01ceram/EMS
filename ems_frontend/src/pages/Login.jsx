import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
         const response = await axios.post("http://localhost:4000/api/auth/login",{
          email,
          password
         });
         console.log(response)
    }catch(error){
           if(error.response && error.response.data && error.response.data.message){
            setError( error.response.data.message)
    }else{
      setError("An unexpected error occurred")
    }
  }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6 relative overflow-hidden">
      {/* decorative blurred orbs (subtle monochrome) */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/6 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-white/3 rounded-full blur-2xl animate-blob animation-delay-2000" />

      <div className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 flex flex-col justify-center gap-6 bg-neutral-900 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" opacity="0.95" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold">Welcome back</h2>
              <p className="text-sm text-white/80 mt-1">Sign in to manage the EMS dashboard</p>
            </div>
          </div>

          <p className="text-sm text-white/80 max-w-sm">
            Fast, secure access to employee and system management tools. Use the demo credentials shown on the form to try the dashboard.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm">Learn more</button>
            <button onClick={() => navigate('/login')} className="px-4 py-2 rounded-lg bg-transparent border border-white/10 text-white text-sm">Help</button>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-white">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Sign in</h3>
          <p className="text-sm text-slate-500 mb-6">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <a className="text-sm text-slate-700 hover:underline">Forgot password?</a>
            </div>

            <div>
              <button type="submit" className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-slate-800 border border-slate-200">
                Sign in
              </button>
            </div>

            <div className="text-center text-sm text-slate-500">Demo: admin@example.com / password</div>
          </form>
        </div>
      </div>

      {/* small styles for animation (Tailwind handles most) */}
      <style>{`
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  )
}

export default Login
