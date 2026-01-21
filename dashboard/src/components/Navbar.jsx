import { Bell, Search, Settings, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-[#1e293b] border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left side - Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="text-4xl animate-pulse">🤖</div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                My Bot Ecosystem
              </h1>
              <p className="text-xs text-emerald-400 font-medium">
                ● All systems operational
              </p>
            </div>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-2">
            
            {/* Search */}
            <button className="p-3 hover:bg-gray-700/50 rounded-xl transition-all duration-200 group">
              <Search className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>

            {/* Notifications */}
            <button className="p-3 hover:bg-gray-700/50 rounded-xl transition-all duration-200 relative group">
              <Bell className="w-5 h-5 text-gray-400 group-hover:text-white" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#1e293b] animate-pulse"></span>
            </button>

            {/* Settings */}
            <button className="p-3 hover:bg-gray-700/50 rounded-xl transition-all duration-200 group">
              <Settings className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* User profile */}
            <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700/50 rounded-xl transition-all duration-200 ml-2">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300">You</span>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;