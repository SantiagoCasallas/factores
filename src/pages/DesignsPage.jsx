import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { designs, getStatusBadgeClasses } from '../data/designs.js'
import BottomNav from '../components/BottomNav.jsx'
import Header1 from '../components/Header1.jsx'

export default function DesignsPageWarm() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return designs
    return designs.filter((d) => (d.title + ' ' + d.subtitle).toLowerCase().includes(q))
  }, [query])

  return (
    <div className="min-h-screen bg-orange-50 text-orange-950 flex flex-col">
      <Header1 title="T-Prints" />

      <main className="flex-1 max-w-5xl mx-auto w-full p-4 space-y-6 pb-24">
        <section className="container-query">
          <div className="flex flex-col @[480px]:flex-row items-start @[480px]:items-center justify-between gap-4 rounded-xl border border-orange-200 bg-amber-100 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-orange-600">
                <span className="material-symbols-outlined">info</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-orange-950 text-base font-bold leading-tight">
                  Primero debes seleccionar una camisa
                </p>
                <p className="text-orange-800 text-sm font-normal leading-normal">
                  Para aplicar un diseño a tu pedido, elige una prenda base de nuestro catálogo.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('/productos')}
              className="w-full @[480px]:w-auto flex min-w-[160px] items-center justify-center rounded-lg h-10 px-4 bg-orange-600 text-white text-sm font-semibold shadow-sm hover:bg-orange-700 transition-colors"
            >
              <span className="truncate">Ir a seleccionar camisa</span>
            </button>
          </div>
        </section>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 text-xl">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-orange-200 rounded-lg py-2 pl-10 pr-4 text-sm text-orange-950 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-all"
              placeholder="Buscar diseños..."
              type="text"
            />
          </div>

          <button className="flex items-center justify-center rounded-lg border border-orange-200 bg-white px-3 py-2 text-orange-700 hover:bg-orange-100 transition-colors">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-orange-950">Diseños Disponibles</h2>
          <button className="text-orange-600 text-sm font-semibold hover:text-orange-700 transition-colors">
            Ver todos
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((d) => {
            const badge = getStatusBadgeClasses(d.statusTone)
            return (
              <div
                key={d.id}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-orange-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden bg-orange-50 flex items-center justify-center p-6">
                  <img
                    alt={d.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    src={d.image}
                  />
                  <div className="absolute top-2 right-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${badge.wrapper} ${badge.text}`}
                    >
                      {d.status}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-bold text-orange-950 text-sm">{d.title}</h3>
                  <p className="text-orange-700 text-xs mt-1">{d.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="py-10 text-center">
          <button className="flex items-center justify-center gap-2 mx-auto rounded-xl border-2 border-dashed border-orange-300 px-6 py-8 w-full max-w-xs text-orange-700 hover:border-orange-500 hover:text-orange-800 hover:bg-orange-100 transition-all">
            <span className="material-symbols-outlined">add_circle</span>
            <span className="font-semibold">Subir diseño personalizado</span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}