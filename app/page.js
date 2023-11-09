import Frame from "@/components/Frame";
import Monaco from "@/components/Monaco";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="h-screen max-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Monaco />
        <Frame />
      </div>
    </main>
  );
}
