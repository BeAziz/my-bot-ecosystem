import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BotCard from './components/BotCard';
import EventTimer from './components/EventTimer';
import StatCard from './components/StatCard';
import ActivityLog from './components/ActivityLog';
import { Activity, Users, Zap, TrendingUp } from 'lucide-react';

function App() {
  const bots = [
    {
      icon: '🐦',
      name: 'Birds Bot',
      status: 'active',
      uptime: '5d 12h 34m',
      lastAction: 'Posted "Eagle facts"',
      nextAction: 'Falcon info @ 6:00 PM',
      cpu: 2.3,
      memory: 45,
      health: 100,
    },
    {
      icon: '⚽',
      name: 'Matches Bot',
      status: 'active',
      uptime: '3d 8h 15m',
      lastAction: 'Al-Nassr vs Al-Hilal alert',
      nextAction: 'Match in 45 mins',
      cpu: 1.8,
      memory: 38,
      health: 100,
    },
    {
      icon: '🎮',
      name: 'Gaming Stats',
      status: 'paused',
      uptime: '2d 4h 22m',
      lastAction: 'Updated Steam hours',
      nextAction: null,
      cpu: 0.5,
      memory: 22,
      health: 85,
    },
    {
      icon: '🎯',
      name: 'ARC Events Tracker',
      status: 'active',
      uptime: '2d 4h 22m',
      lastAction: 'Storm event detected',
      nextAction: 'Anomaly in 1h 45m',
      cpu: 0.9,
      memory: 22,
      health: 100,
    },
    {
      icon: '🐦',
      name: 'Twitter Bot',
      status: 'active',
      uptime: '7d 2h 11m',
      lastAction: 'Posted update',
      nextAction: 'Scheduled @ 8:00 PM',
      cpu: 1.2,
      memory: 35,
      health: 100,
    },
    {
      icon: '💻',
      name: 'Pi-hole Monitor',
      status: 'waiting',
      uptime: 'N/A',
      lastAction: 'Waiting for Raspberry Pi',
      nextAction: null,
      cpu: 0,
      memory: 0,
      health: 0,
    },
  ];

  const events = [
    {
      type: 'storm',
      name: 'Storm Event',
      description: 'High intensity weather',
      duration: 3600,
    },
    {
      type: 'anomaly',
      name: 'Anomaly Spawn',
      description: 'Rare anomaly detected',
      duration: 6300,
    },
    {
      type: 'loot',
      name: 'Rare Loot Drop',
      description: 'Legendary items available',
      duration: 7800,
    },
  ];

  const activities = [
    { type: 'info', message: '🎯 ARC Events: Storm event in 15 mins', time: '14:23:15', bot: 'ARC Tracker' },
    { type: 'success', message: '🐦 Birds Bot: Posted "Falcon Facts"', time: '14:20:03', bot: 'Birds Bot' },
    { type: 'warning', message: '⚽ Matches: Alert sent for Al-Nassr game', time: '14:15:47', bot: 'Matches Bot' },
    { type: 'success', message: '🔍 Scraper: Updated game deals (12 new)', time: '14:10:22', bot: 'Scraper' },
    { type: 'info', message: '🐦 Twitter: New follower (+1)', time: '14:05:11', bot: 'Twitter Bot' },
    { type: 'success', message: '🎯 ARC Events: Anomaly spawned', time: '14:00:00', bot: 'ARC Tracker' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">
              Welcome to Your Dashboard! 🚀
            </h1>
            <p className="text-blue-100 text-lg">
              Monitor and control all your bots from one central location.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Active Bots"
              value="7"
              change={12}
              icon={Activity}
              color="blue"
            />
            <StatCard 
              title="Total Tasks"
              value="1,247"
              change={23}
              icon={Zap}
              color="green"
            />
            <StatCard 
              title="Followers"
              value="1,247"
              change={5.2}
              icon={Users}
              color="purple"
            />
            <StatCard 
              title="Uptime"
              value="99.9%"
              change={0.1}
              icon={TrendingUp}
              color="orange"
            />
          </div>

          {/* ARC Raiders Event Timers */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <span>🎮</span>
              <span>ARC Raiders - Event Timers</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventTimer key={index} event={event} />
              ))}
            </div>
          </div>

          {/* Microservices Status */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <span>🤖</span>
              <span>Microservices Status</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {bots.map((bot, index) => (
                <BotCard key={index} bot={bot} />
              ))}
            </div>
          </div>

          {/* Activity Log */}
          <ActivityLog activities={activities} />

        </main>
      </div>
    </div>
  );
}

export default App;