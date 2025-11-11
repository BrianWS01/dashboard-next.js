export default function Header() {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Bem-vindo, Admin</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Sair
        </button>
      </div>
    </header>
  );
}
