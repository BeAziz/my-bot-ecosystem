import { TrendingUp, TrendingDown } from 'lucide-react';

function StatCard({ title, value, change, icon: Icon, color = 'blue' }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-emerald-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
  };

  const isPositive = change >= 0;

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-sm text-gray-400 font-medium mb-1">{title}</h3>

      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-white">{value}</p>
        
        {change !== undefined && (
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-semibold">
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        )}
      </div>

    </div>
  );
}

export default StatCard;