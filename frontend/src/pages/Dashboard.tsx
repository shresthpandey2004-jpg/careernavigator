import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  Target,
  Briefcase,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'

const Dashboard = () => {
  const { user } = useAuthStore()

  const stats = [
    {
      label: 'Career Readiness',
      value: '65%',
      change: '+12%',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Skills Learned',
      value: '8/12',
      change: '+3 this week',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Applications',
      value: '15',
      change: '5 pending',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
    },
    {
      label: 'Interviews',
      value: '3',
      change: '2 upcoming',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const quickActions = [
    {
      title: 'Complete Career DNA',
      description: 'Take assessment to find your perfect career match',
      link: '/career-dna',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-blue-500',
      status: 'pending',
    },
    {
      title: 'Analyze Skill Gaps',
      description: 'Identify missing skills for your target role',
      link: '/skill-gap',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-purple-500',
      status: 'in-progress',
    },
    {
      title: 'Browse Jobs',
      description: 'Find jobs matched to your profile',
      link: '/jobs',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-orange-500',
      status: 'available',
    },
  ]

  const recentActivity = [
    {
      type: 'application',
      title: 'Applied to Backend Developer at TechCorp',
      time: '2 hours ago',
      status: 'pending',
    },
    {
      type: 'skill',
      title: 'Completed React.js learning milestone',
      time: '1 day ago',
      status: 'completed',
    },
    {
      type: 'interview',
      title: 'Interview scheduled with StartupXYZ',
      time: '2 days ago',
      status: 'upcoming',
    },
  ]

  const upcomingTasks = [
    { task: 'Complete Node.js module', deadline: 'Today', priority: 'high' },
    { task: 'Prepare for TechCorp interview', deadline: 'Tomorrow', priority: 'high' },
    { task: 'Update portfolio projects', deadline: 'This week', priority: 'medium' },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">{user?.name}!</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Here's your career progress overview
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg text-white`}>
                  {stat.icon}
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={action.link}
                      className="card group hover:scale-105 transition-transform duration-300 h-full"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`${action.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                          {action.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-1 group-hover:text-blue-600 transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">{action.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-medium">
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <div className="card space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0"
                  >
                    <div className={`p-2 rounded-lg ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                      activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {activity.status === 'completed' ? <CheckCircle className="w-5 h-5" /> :
                       activity.status === 'pending' ? <Clock className="w-5 h-5" /> :
                       <AlertCircle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-slate-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Upcoming Tasks</h2>
              <div className="card space-y-3">
                {upcomingTasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 pb-3 border-b border-slate-200 last:border-0 last:pb-0"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{task.task}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-slate-500">{task.deadline}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          task.priority === 'high' ? 'bg-red-100 text-red-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress Card */}
            <div className="card bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <h3 className="text-xl font-bold mb-2">Keep Going!</h3>
              <p className="text-blue-100 mb-4">
                You're 65% ready for your dream job. Complete 3 more skills to reach 80%!
              </p>
              <Link to="/skill-gap" className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
