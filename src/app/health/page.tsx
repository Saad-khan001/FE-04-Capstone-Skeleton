export default async function HealthPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div className="space-y-4 max-w-full overflow-hidden">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-800 text-xs sm:text-sm font-medium">
        <span>●</span> System Status: Healthy
      </div>
      
      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">API Data Fetch Verification</h1>
      <p className="text-slate-400 text-sm sm:text-base">Data successfully fetched on the server side:</p>

      <div className="w-full overflow-x-auto rounded-lg border border-slate-800 bg-slate-900 p-4">
        <pre className="text-green-300 font-mono text-xs sm:text-sm whitespace-pre-wrap sm:whitespace-pre">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}