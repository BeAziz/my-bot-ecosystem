import { Power, Settings, TrendingUp, Clock, Cpu, Activity } from 'lucide-react';

function BotCard({ bot }) {
  const statusColors = {
    active: 'bg-emerald-500',
    paused: 'bg-amber-500',
    offline: 'bg-red-500',
    waiting: 'bg-gray-500',
  };

  const statusLabels = {
    active: 'Active',
    paused: 'Paused',
    offline: 'Offline',
    waiting: 'Waiting',
  };

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{bot.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-white">{bot.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${statusColors[bot.status]} animate-pulse`}></div>
              <span className="text-xs text-gray-400 font-medium">{statusLabels[bot.status]}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition">
            <Settings className="w-4 h-4 text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition">
            <TrendingUp className="w-4 h-4 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-gray-400">Uptime:</span>
          <span className="text-white font-medium">{bot.uptime}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Activity className="w-4 h-4 text-gray-500" />
          <span className="text-gray-400">Last Action:</span>
          <span className="text-white font-medium truncate">{bot.lastAction}</span>
        </div>

        {bot.nextAction && (
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Next:</span>
            <span className="text-blue-400 font-medium">{bot.nextAction}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[#0f172a] rounded-lg p-3">
          <div className="flex items-center justify-between">
            <Cpu className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-400">CPU</span>
          </div>
          <p className="text-lg font-bold text-white mt-1">{bot.cpu}%</p>
        </div>
        
        <div className="bg-[#0f172a] rounded-lg p-3">
          <div className="flex items-center justify-between">
            <Activity className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-400">Memory</span>
          </div>
          <p className="text-lg font-bold text-white mt-1">{bot.memory}MB</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Health</span>
          <span className="text-xs font-semibold text-emerald-400">{bot.health}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-green-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${bot.health}%` }}
          ></div>
        </div>
      </div>

      <button 
        className={`
          w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-200
          ${bot.status === 'active' 
            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
            : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
          }
        `}
      >
        <div className="flex items-center justify-center space-x-2">
          <Power className="w-4 h-4" />
          <span className="text-sm">
            {bot.status === 'active' ? 'Stop Bot' : 'Start Bot'}
          </span>
        </div>
      </button>

    </div>
  );
}

export default BotCard;