import {
  ArrowLeft,
  ChevronDown,
  ImagePlus,
  AlertCircle,
  Plus,
} from "lucide-react";
import Navbar from "../components/navbar";

export default function RegisterNetworkPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/*  Header Component */}
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-4 py-5 lg:px-6">
        {/* Back */}
        <button className="mb-4 flex items-center gap-2 text-xs font-medium text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to dashboard
        </button>

        {/* Hero */}
        <div className="mb-5 rounded-xl border border-slate-200 bg-white p-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
            Network Registration
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Register Network
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Add an enterprise to your Market Center collection network.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-xl border border-slate-200 bg-white">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-base font-semibold text-slate-900">
                Enterprise details
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Enter essential network information below.
              </p>
            </div>

            {/* Desktop Layout */}
            <div className="grid gap-6 xl:grid-cols-12">
              {/* Left Side */}
              <div className="xl:col-span-8">
                <div className="space-y-4">
                  {/* Location */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">
                      Location *
                    </label>

                    <div className="relative">
                      <select className="h-10 w-full text-slate-700 appearance-none rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-700">
                        <option>Pimple Saudagar</option>
                      </select>

                      <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Enterprise Name */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">
                      Enterprise Name
                    </label>

                    <input
                      placeholder="Store name, shop name, business name"
                      className="h-10 w-full rounded-lg text-slate-700 border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">
                      Enterprise Category *
                    </label>

                    <div className="relative">
                      <select className="h-10 w-full text-slate-700 appearance-none rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-700">
                        <option>Select enterprise category</option>
                        <option>Illegal Substance Distribution</option>
                      </select>

                      <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Sub Category */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">
                      Enterprise Sub Category *
                    </label>

                    <div className="relative">
                      <select className="h-10 w-full text-slate-700 appearance-none rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-700">
                        <option>Select enterprise sub category</option>
                        <option>Vimal Guthka Distribution</option>
                        <option>Cocaine Distribution</option>
                      </select>

                      <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Owner */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">
                      Enterprise Owner
                    </label>

                    <input
                      placeholder="Enter enterprise owner name"
                      className="h-10 w-full text-slate-700 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Upload Card */}
              <div className="xl:col-span-4">
                <label className="mb-2 block text-xs font-medium text-slate-700">
                  Enterprise Image (optional)
                </label>

                <div className="flex min-h-[215px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <ImagePlus className="h-5 w-5" />
                  </div>

                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-600"
                  >
                    Choose Image
                  </button>

                  <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                    JPG PNG GIF files
                    <br />
                    Max size 5 MB
                  </p>
                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  A visual helps identify the enterprise.
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="mt-5">
              <label className="mb-2 block text-xs font-medium text-slate-700">
                Exact Address *
              </label>

              <textarea
                rows={4}
                placeholder="Shop / Building, Street, Landmark and PIN Code"
                className="w-full text-slate-700 rounded-lg border border-slate-200 p-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* 2 Column */}
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {/* Mobile */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-700">
                  Mobile Number *
                </label>

                <div className="relative">
                  <input
                    placeholder="+91 98765 43210"
                    className="h-10 text-slate-700 w-full rounded-lg border border-slate-200 px-3 pr-10 text-sm outline-none"
                  />
                </div>

                <p className="mt-1 text-[11px] text-slate-500">
                  Enter a valid 10 digit number
                </p>
              </div>

              {/* Amount */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-700">
                  Collection Amount Agreed (optional)
                </label>

                <input
                  placeholder="₹ 50,000"
                  className="h-10 text-slate-700 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                />

                <p className="mt-1 text-[11px] text-slate-700">
                  Enter the agreed amount if known.
                </p>
              </div>
            </div>

            {/* Previous Collections */}
            <div className="mt-8">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Previous Collections{" "}
                  <span className="font-normal text-slate-400">
                    (optional)
                  </span>
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Associate collection activity already connected to the
                  enterprise.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-10">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm font-medium text-slate-700">
                    No previous collections added
                  </p>

                  <p className="mt-2 text-center text-xs text-slate-400">
                    Add existing amounts to improve visibility and search.
                  </p>

                  <button className="mt-5 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                    <Plus className="h-4 w-4" />
                    Add collection entry
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 text-xs text-slate-400">
              Complete all required fields and connect the network before
              registration.
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 px-4 py-4 md:px-6 lg:px-8">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                Cancel Registration
              </button>

              <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                Register Network
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}