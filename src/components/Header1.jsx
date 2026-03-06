export default function Header1({ title = "T-Prints" }) {
  return (
    <header className="sticky top-0 z-10 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 justify-center">
      <h1 className="text-lg font-bold leading-tight tracking-tight text-primary">
        {title}
      </h1>
    </header>
  );
}