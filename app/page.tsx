import CronBuilder from "./components/CronBuilder";
import SeoContent from "./components/SeoContent";

export default function Home() {
  return (
    <>
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Cron Expression Generator
          </h1>
          <p className="mt-2 text-slate-500 text-lg">
            Build, explain, and visualize cron schedules — no syntax memorization required.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full">
        <CronBuilder />
        <SeoContent />
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-slate-500">
          <p>
            Cron Expression Generator — A free developer tool for building and understanding cron schedules.
          </p>
          <p className="mt-1">
            All processing happens in your browser. No data is sent to any server.
          </p>
        </div>
      </footer>
    </>
  );
}
