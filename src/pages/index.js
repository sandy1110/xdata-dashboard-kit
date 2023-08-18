import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className={`flex min-h-screen`}>
      <Sidebar />
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1>Hello world</h1>
      </div>
    </main>
  )
}
