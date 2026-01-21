import { Clock, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

function ActivityLog({ activities }) {
  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-amber-400" />;
      default: return <Info className="w-4 h-4 text-blue-400" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-emerald-500/10 border-emerald-500/30';
      case 'error': return 'bg-red-500/10 border-red-500/30';
      case 'warning': return 'bg-amber-500/10 border-amber-500/30';
      default: return 'bg-blue-500/10 border-blue-500/30';
    }
  };

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700">
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Activity Log</h2>
        <div className="flex items-center space-x-2">
          <button className="text-xs text-gray-400 hover:text-white transition px-3 py-1 hover:bg-gray-700 rounded-lg">
            Clear
          </button>
          <button className="text-xs text-gray-400 hover:text-white transition px-3 py-1 hover:bg-gray-700 rounded-lg">
            Export
          </button>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border ${getBgColor(activity.type)} hover:scale-[1.02] transition-transform duration-200`}
          >
            <div className="flex items-start space-x-3">
              
              <div className="mt-0.5">
                {getIcon(activity.type)}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium">
                  {activity.message}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-400">{activity.time}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{activity.bot}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ActivityLog;