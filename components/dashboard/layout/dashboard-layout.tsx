import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}