import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 sm:py-20 space-y-6 max-w-2xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 text-blue-400 border border-blue-800/50 text-xs sm:text-sm font-medium">
        🚀 Capstone Project Skeleton
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
        Welcome to Capstone Foundations
      </h1>

      <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
        This is the foundation skeleton layout for our application. Use the navigation links above to explore placeholder screens and check system status.
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/dashboard"
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition shadow-lg shadow-blue-500/20"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/health"
          className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition"
        >
          View Health Status 🟢
        </Link>
      </div>
    </div>
  );
}