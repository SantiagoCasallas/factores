import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-primary flex size-10 shrink-0 items-center justify-center hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-primary text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-10">T-Prints</h1>
        </div>

        <div className="px-8 pt-4 pb-2">
          <div className="relative w-full aspect-square max-w-[280px] mx-auto bg-primary/5 rounded-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC306hDpPRBJQ0YHyanZ7pMjknwvJJxKyVDioT_LOmRDYDURwDXUkODF6jz5gtJMnuo3B7j8Pje1L1eSRSu6KbkjJ7M0fweMl-lbKijVbbAywxuRIPUiY1K-ObCju_47ro7tCJkp7EHwB0VXDwxMDxO8V6i3YIhCJ33P1M27zsPlX6aaqhDb0KqYJQmBhO_mFjHghrpPd0JEIGRz4ypRLO8GmqQ_VGGjP4zPlgAZEhVckezn84RdHCreKBZvcvmrErvHVNl4pfZaZJh")',
              }}
            ></div>
          </div>
          
        </div>

        <div className="px-8 pt-6 pb-2 text-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">Welcome Back</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Please enter your details to sign in</p>
        </div>

        <form
          className="px-8 py-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            // TODO: conectar auth real.
            navigate('/productos')
          }}
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold px-1">Email</label>
            <div className="relative group">
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                placeholder="name@example.com"
                type="email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Password</label>
            </div>
            <div className="relative flex items-center">
              <input
                className="w-full h-12 pl-4 pr-12 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
                required
              />
              <button
                className="absolute right-3 text-slate-400 hover:text-primary transition-colors"
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <button
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
            type="submit"
          >
            Log In
            <span className="material-symbols-outlined text-sm">login</span>
          </button>
        </form>

        <div className="px-8 pb-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Don&apos;t have an account?
            <Link
              className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
              to="/registro"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 text-slate-400 dark:text-slate-600 text-xs flex gap-4">
        <button className="hover:text-primary transition-colors" type="button">
          Privacy Policy
        </button>
        <span>•</span>
        <button className="hover:text-primary transition-colors" type="button">
          Terms of Service
        </button>
      </div>
    </div>
  )
}
