import Image from "next/image";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fb]">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

          {/* Left Side - Login Form */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-md">

              {/* Logo */}
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                  h
                </div>

                <h1 className="text-3xl font-bold text-slate-900">
                  Hafta
                </h1>
              </div>

              <p className="mb-8 text-sm text-slate-500">
                Digitizing unofficial collections since 1997.
              </p>

              {/* Welcome Text */}
              <h2 className="mb-8 text-4xl font-bold text-slate-900">
                Create Your Account
              </h2>

              {/* Form */}
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-700">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-700">
                    Confirm your Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Create Account
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-sm text-slate-400">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Google Button */}
              <button className="w-full rounded-xl border border-slate-200 bg-white py-3 font-medium text-slate-700 hover:bg-slate-50">
                Continue with Google
              </button>

              {/* Footer */}
              <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <span className="cursor-pointer font-medium text-blue-600">
                  Login instead
                </span>
              </p>

            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex items-center justify-center bg-[#eef3ff] p-8 lg:p-16">
            <Image
              src="/images/HaftaSignUpImg.png"
              alt="Hafta Illustration"
              width={700}
              height={700}
              className="h-auto w-full max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}