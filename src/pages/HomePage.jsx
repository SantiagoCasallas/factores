import BottomNav from '../components/BottomNav.jsx'
import PlaceholderCard from '../components/PlaceholderCard.jsx'

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display grid place-items-center p-6 pb-28">
      <PlaceholderCard
        title="Inicio"
        description="Pantalla placeholder. En el prototipo original solo venían Login / Registro / Productos / Estampas." 
        actions={[
          { to: '/productos', label: 'Ir a Productos' },
          { to: '/disenos', label: 'Ir a Estampas' },
        ]}
      />
      <BottomNav />
    </div>
  )
}
