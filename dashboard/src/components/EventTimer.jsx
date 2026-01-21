import { Timer, Flame, Zap, Gem } from 'lucide-react';
import { useEffect, useState } from 'react';

function EventTimer({ event }) {
  const [timeLeft, setTimeLeft] = useState(event.duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    return ((event.duration - timeLeft) / event.duration) * 100;
  };

  const getIcon = () => {
    switch (event.type) {
      case 'storm': return <Flame className="w-5 h-5" />;
      case 'anomaly': return <Zap className="w-5 h-5" />;
      case 'loot': return <Gem className="w-5 h-5" />;
      default: return <Timer className="w-5 h-5" />;
    }
  };

  const getColor = () => {
    const progress = getProgress();
    if (progress > 80) return 'text-red-400 border-red-500/50';
    if (progress > 50) return 'text-amber-400 border-amber-500/50';
    return 'text-emerald-400 border-emerald-500/50';
  };

  return (
    <div className={`bg-[#1e293b] rounded-xl p-5 border ${getColor()} transition-all duration-300`}>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`${getColor().split(' ')[0]}`}>
            {getIcon()}
          </div>
          <div>
            <h3 className="text-white font-bold">{event.name}</h3>
            <p className="text-xs text-gray-400">{event.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a] rounded-lg p-4 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400 font-medium">TIME REMAINING</span>
          <Timer className="w-4 h-4 text-gray-500" />
        </div>
        <div className={`text-3xl font-bold ${getColor().split(' ')[0]} font-mono`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Progress</span>
          <span className={`text-xs font-bold ${getColor().split(' ')[0]}`}>
            {Math.round(getProgress())}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${
              getProgress() > 80 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
              getProgress() > 50 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
              'bg-gradient-to-r from-emerald-500 to-green-500'
            }`}
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
      </div>

      {getProgress() > 80 && (
        <div className="mt-3 bg-red-500/10 border border-red-500/30 rounded-lg p-3 animate-pulse">
          <p className="text-xs text-red-400 font-semibold text-center">
            ⚠️ Event starting soon!
          </p>
        </div>
      )}

    </div>
  );
}

export default EventTimer;