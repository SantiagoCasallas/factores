import { NavLink } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";
import { products } from "../data/products.js";
import Header1 from "../components/Header1.jsx";

export default function ProductsPage() {

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <Header1 title="T-Prints" />
      <main className="flex-1 pb-24">
        <div className="px-4 pt-6 pb-2">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 dark:text-slate-100">
            Productos
          </h2>
        </div>

        <div className="sticky top-[64px] z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pb-2">
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 gap-8">
            <NavLink
              to="/productos"
              end
              className={({ isActive }) =>
                `flex flex-col items-center justify-center pb-3 pt-4 border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-primary"
                } transition-colors`
              }
            >
              <p className="text-sm font-bold tracking-wide">Camisas</p>
            </NavLink>
            <NavLink
              to="/disenos"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center pb-3 pt-4 border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-primary"
                } transition-colors`
              }
            >
              <p className="text-sm font-bold tracking-wide">Estampas</p>
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col gap-3 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="relative w-full aspect-square bg-slate-100 dark:bg-slate-800 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(\"${p.image}\")` }}
              >
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-400 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    favorite
                  </span>
                </button>
              </div>
              <div className="px-3 pb-4">
                <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-snug">
                  {p.name}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-0.5">
                  {p.sizes}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-primary text-sm font-bold">{p.price}</p>
                  <span className="material-symbols-outlined text-primary text-xl">
                    add_circle
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
