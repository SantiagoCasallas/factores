import { Link, useNavigate } from 'react-router-dom'

export default function CreateAccountPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center cursor-pointer"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-lg">print</span>
            </div>
            <span className="font-bold text-xl tracking-tight">T-Prints</span>
          </div>
          <div className="size-12 shrink-0"></div>
        </div>

        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-200 dark:bg-slate-800 @[480px]:rounded-xl min-h-[280px] shadow-sm"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAedTX7v-G8x19lPl6PbWdtn_cMbIKSo7-zPZLZ6hvZp_LDq0fUYgU6fXg1jXlHDfChl5EzsFVEbCj74Y0eNlIc6uvgZxvxti4u7mmsEXkkjWJ3kcDlTvSL9AD0gyp5xboe2c3Pzq0jbjvXVOM6ablpGhSUnNMOhY21wF-4KldhlTpSMtA7XTYsxF7mTf9fBvpg14jPY9_y6NuLvEnQWe_iai3g4KK3nR6_XvtvmkvbR3CiAPTq2eI_JTjX8_Xw_iaipcXdrB_FMHX9")',
              }}
            ></div>
          </div>
        </div>

        <div className="px-4 pt-8 pb-4">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">Create Account</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal mt-2">
            Join the T-Prints community today
          </p>
        </div>

        <form
          className="flex flex-col gap-4 px-4 py-2 max-w-[480px]"
          onSubmit={(e) => {
            e.preventDefault()
            // TODO: conectar registro real.
            navigate('/login')
          }}
        >
          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 px-1">Username</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
              <input
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal leading-normal transition-all"
                placeholder="Choose a unique username"
                type="text"
                required
              />
            </div>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 px-1">Email Address</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
              <input
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal leading-normal transition-all"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 px-1">Password</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
              <input
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal leading-normal transition-all"
                placeholder="Create a strong password"
                type="password"
                required
              />
            </div>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 px-1">Select your role</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">badge</span>
              <select
                className="form-select flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 pl-12 pr-10 text-base font-normal leading-normal appearance-none transition-all"
                defaultValue=""
                required
              >
                <option disabled value="">
                  Who are you?
                </option>
                <option value="designer">Designer / Creative</option>
                <option value="customer">Customer / Buyer</option>
                <option value="printer">Print Professional</option>
                <option value="business">Business Owner</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                expand_more
              </span>
            </div>
          </label>

          <div className="pt-2">
            <button
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Create Account</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>

        <div className="px-4 pb-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal">
            Already have an account?
            <Link className="text-primary font-bold hover:underline ml-1" to="/login">
              Log In
            </Link>
          </p>
        </div>

        <div className="h-8"></div>
      </div>
    </div>
  )
}
