export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Painel</h2>
      <nav className="flex flex-col gap-3">
        <a href="#" className="hover:text-blue-600">Dashboard</a>
        <a href="#" className="hover:text-blue-600">Usuários</a>
        <a href="#" className="hover:text-blue-600">Agendamentos</a>
        <a href="#" className="hover:text-blue-600">Configurações</a>
      </nav>
    </aside>
  );
}
