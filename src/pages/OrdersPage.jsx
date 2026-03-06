import BottomNav from "../components/BottomNav.jsx";
import PlaceholderCard from "../components/PlaceholderCard.jsx";
import Header1 from "../components/Header1.jsx";

export default function OrdersPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <Header1 title="T-Prints" />

    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display grid place-items-center p-6 pb-28">
      <PlaceholderCard
        title="Mis pedidos"
        description="Placeholder: la pantalla existe en el menú del prototipo, pero no venía el HTML."
        actions={[{ to: "/productos", label: "Seguir comprando" }]}
        />
      <BottomNav />
        </div>
    </div>
  );
}
