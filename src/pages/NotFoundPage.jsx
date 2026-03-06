import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 grid place-items-center p-6">
      <div className="max-w-md w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">No encontré esa ruta.</p>
        <Link
          to="/productos"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white font-semibold"
        >
          Ir a Productos
        </Link>
      </div>
    </div>
  )
}
