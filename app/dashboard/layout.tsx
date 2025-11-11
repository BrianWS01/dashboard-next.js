import "../globals.css";
import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";

export const metadata = {
  title: "Admin Dashboard",
  description: "Painel administrativo com Next.js e shadcn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
