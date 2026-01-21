import { Home, Bird, Trophy, Gamepad2, Target, Twitter, Settings, BarChart3 } from 'lucide-react';
import { useState } from 'react';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Dashboard', color: 'blue' },
    { id: 'birds', icon: Bird, label: 'Birds Bot', color: 'green' },
    { id: 'matches', icon: Trophy, label: 'Matches', color: 'red' },
    { id: 'gaming', icon: Gamepad2, label: 'Gaming', color: 'purple' },
    { id: 'arc', icon: Target, label: 'ARC Raiders', color: 'orange' },
    { id: 'twitter', icon: Twitter, label: 'Twitter Bot', color: 'blue' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', color: 'indigo' },
    { id: 'settings', icon: Settings, label: 'Settings', color: 'gray' },
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      blue: isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-blue-600/10 hover:text-blue-400',
      green: isActive ? 'bg-green-600 text-white' : 'text-gray-400 hover:bg-green-600/10 hover:text-green-400',
      red: isActive ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-red-600/10 hover:text-red-400',
      purple: isActive ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-purple-600/10 hover:text-purple-400',
      orange: isActive ? 'bg-orange-600 text-white' : 'text-gray-400 hover:bg-orange-600/10 hover:text-orange-400',
      indigo: isActive ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-indigo-600/10 hover:text-indigo-400',
      gray: isActive ? 'bg-gray-600 text-white' : 'text-gray-400 hover:bg-gray-600/10 hover:text-gray-300',
    };
    return colors[color] || colors.gray;
  };

  return (
    <aside className="w-64 bg-[#1e293b] border-r border-gray-700 min-h-screen p-4">
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-xl
                transition-all duration-200 font-medium
                ${getColorClasses(item.color, isActive)}
                ${isActive ? 'shadow-lg transform scale-105' : ''}
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
              
              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-8 p-4 bg-[#0f172a] rounded-xl border border-gray-700">
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">System Status</h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Active Bots</span>
            <span className="text-sm font-bold text-emerald-400">7</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Uptime</span>
            <span className="text-sm font-bold text-blue-400">99.9%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Tasks Today</span>
            <span className="text-sm font-bold text-purple-400">234</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">CPU Usage</span>
            <span className="text-xs font-semibold text-gray-300">23%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full" style={{ width: '23%' }}></div>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;