import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2 bg-gray-200 min-h-screen">
        <Sidebar />
      </div>
      <div className="col-span-10 bg-white p-2">{children}</div>
    </div>
  );
}
