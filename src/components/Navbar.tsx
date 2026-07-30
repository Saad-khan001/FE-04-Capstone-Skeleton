import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-4 sm:px-6 py-4 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-bold text-xl text-white tracking-wide">
          Capstone App
        </Link>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition px-2 py-1 rounded-md hover:bg-slate-800">Home</Link>
          <Link href="/dashboard" className="hover:text-white transition px-2 py-1 rounded-md hover:bg-slate-800">Dashboard</Link>
          <Link href="/settings" className="hover:text-white transition px-2 py-1 rounded-md hover:bg-slate-800">Settings</Link>
          <Link href="/health" className="hover:text-white transition px-2 py-1 rounded-md hover:bg-slate-800 text-green-400 font-medium">Health Check 🟢</Link>
        </div>
      </nav>
    </header>
  );
}