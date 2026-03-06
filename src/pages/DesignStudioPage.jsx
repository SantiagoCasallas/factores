import BottomNav from '../components/BottomNav.jsx'
import PlaceholderCard from '../components/PlaceholderCard.jsx'

export default function DesignStudioPage() {


  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display grid place-items-center p-6 pb-28">
      <PlaceholderCard
        title="Diseñar"
        description="Placeholder para el módulo de diseño (no incluido en los HTML)."
        actions={[{ to: '/disenos', label: 'Ver Estampas' }]}
      />
      <BottomNav />
    </div>
  )
}
