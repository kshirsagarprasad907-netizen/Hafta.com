// Navbar Component
export default function Navbar (){
return (
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">
              h
            </div>

            <div>
              <h1 className="font-semibold text-slate-900">Hafta.com</h1>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium">Ramesh Patil</p>
            <p className="text-xs text-slate-500">
              Inspector • Multi Central
            </p>
          </div>
        </div>
      </header>
)};