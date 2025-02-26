export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      {/* Single line with title and auth buttons */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Empty div for spacing */}
        <div className="w-32"></div>

        {/* Centered title */}
        <h1 className="text-xl font-semibold">Citizen Identity System</h1>

        {/* Auth buttons */}
        <nav className="flex space-x-4 w-32">
          <a 
            href="/login" 
            className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-sm"
          >
            Login
          </a>
          <a 
            href="/register" 
            className="px-4 py-1.5 rounded-md border border-white hover:bg-white hover:text-gray-800 transition-colors text-sm"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
    