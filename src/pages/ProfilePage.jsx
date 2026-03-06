import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";

export default function ProfilePage() {

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display grid place-items-center p-6 pb-28">
      <div className="max-w-md w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h1 className="text-xl font-bold">Perfil</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Placeholder. Puedes conectar aquí autenticación (login/registro) y
          datos del usuario.
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white font-semibold"
            to="/login"
          >
            Ir a Login
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 font-semibold"
            to="/registro"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
