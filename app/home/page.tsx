import Navbar from "../components/navbar";
import DashMetrics from "../components/dashMetrics";
import { title } from "process";

const stats = [
  {
    title: "Pending Amount",
    value: "₹3.6L",
    description: "63 open cases",
  },
  {
    title: "Best Area",
    value: "Kurla",
    description: "43% of workload",
  },
  {
    title: "Today's Collection",
    value: "₹1.2L",
    description: "5 entries today",
  },
  {
    title: "Success Rate",
    value: "94.2%",
    description: "Compared to last month",
  },
];


export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar Component Below */}
      <Navbar/>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* HERO */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
                Collection Overview
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                Welcome back, Inspector Ramesh.
              </h2>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  + Record Collection
                </button>

                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm">
                  View Networks
                </button>
              </div>
            </div>

            <div className="text-sm text-slate-500">
              Tuesday, 27 October 2026
            </div>
          </div>
        </div>

        {/* HEADER */}
        <div className="mt-8 mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">At a glance</h3>
            <p className="text-sm text-slate-500">
              Your territory, by the numbers.
            </p>
          </div>

          <span className="text-sm font-medium text-blue-600">
            October 2026
          </span>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((metric) => (
    <DashMetrics
      key={metric.title}
      title={metric.title}
      value={metric.value}
      description={metric.description}
    />
  ))}
        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div>
              <h3 className="font-semibold text-slate-900">
                Recent Activity
              </h3>

              <p className="text-sm text-slate-500">
                The latest entries from your field force.
              </p>
            </div>

            <button className="text-sm font-medium text-blue-600">
              View all activity →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-slate-500">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Area</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Officer</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}