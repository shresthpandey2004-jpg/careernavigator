import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Clock, ExternalLink, CheckCircle } from 'lucide-react'

const SkillGap = () => {
  const [selectedRole, setSelectedRole] = useState('Full Stack Developer')

  const roles = ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Data Analyst']

  const skillGaps = [
    {
      skill: 'React.js',
      priority: 'critical',
      currentLevel: 'beginner',
      targetLevel: 'advanced',
      estimatedHours: 40,
      progress: 60,
      resources: [
        { title: 'React Official Docs', type: 'documentation', url: '#', free: true },
        { title: 'React Complete Guide', type: 'video', url: '#', free: true },
      ],
    },
    {
      skill: 'Node.js',
      priority: 'critical',
      currentLevel: 'intermediate',
      targetLevel: 'advanced',
      estimatedHours: 30,
      progress: 40,
      resources: [
        { title: 'Node.js Tutorial', type: 'video', url: '#', free: true },
        { title: 'Express.js Guide', type: 'article', url: '#', free: true },
      ],
    },
    {
      skill: 'MongoDB',
      priority: 'important',
      currentLevel: 'beginner',
      targetLevel: 'intermediate',
      estimatedHours: 20,
      progress: 20,
      resources: [
        { title: 'MongoDB University', type: 'course', url: '#', free: true },
      ],
    },
    {
      skill: 'AWS',
      priority: 'nice-to-have',
      currentLevel: 'none',
      targetLevel: 'beginner',
      estimatedHours: 25,
      progress: 0,
      resources: [
        { title: 'AWS Free Tier Tutorial', type: 'video', url: '#', free: true },
      ],
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-600'
      case 'important':
        return 'bg-yellow-100 text-yellow-600'
      default:
        return 'bg-blue-100 text-blue-600'
    }
  }

  const totalHours = skillGaps.reduce((sum, gap) => sum + gap.estimatedHours, 0)
  const completedHours = skillGaps.reduce((sum, gap) => sum + (gap.estimatedHours * gap.progress / 100), 0)

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Skill Gap Analysis</h1>
          <p className="text-slate-600">Identify and bridge the gap between your current and target skills</p>
        </motion.div>

        {/* Role Selection */}
        <div className="card mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Select Target Role
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedRole === role
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3 mb-2">
              <Target className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600">Total Skills</span>
            </div>
            <div className="text-3xl font-bold">{skillGaps.length}</div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-6 h-6 text-purple-600" />
              <span className="text-slate-600">Estimated Time</span>
            </div>
            <div className="text-3xl font-bold">{totalHours}h</div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-slate-600">Progress</span>
            </div>
            <div className="text-3xl font-bold">{Math.round((completedHours / totalHours) * 100)}%</div>
          </div>
        </div>

        {/* Skill Gaps */}
        <div className="space-y-6">
          {skillGaps.map((gap, index) => (
            <motion.div
              key={gap.skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">{gap.skill}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(gap.priority)}`}>
                      {gap.priority}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <span>Current: {gap.currentLevel}</span>
                    <span>→</span>
                    <span>Target: {gap.targetLevel}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{gap.estimatedHours}h</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{gap.progress}%</div>
                  <div className="text-sm text-slate-600">Complete</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${gap.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold mb-3">Learning Resources</h4>
                <div className="space-y-2">
                  {gap.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          {resource.type === 'video' && '🎥'}
                          {resource.type === 'article' && '📄'}
                          {resource.type === 'course' && '📚'}
                          {resource.type === 'documentation' && '📖'}
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </div>
                          <div className="text-sm text-slate-600 capitalize">{resource.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {resource.free && (
                          <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-medium">
                            Free
                          </span>
                        )}
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mark Complete Button */}
              <button className="mt-4 w-full btn-secondary flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Mark as Complete</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <div className="card mt-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <h3 className="text-2xl font-bold mb-4">Your Learning Roadmap</h3>
          <p className="text-blue-100 mb-4">
            Complete all skills in approximately {Math.ceil(totalHours / 20)} weeks (20 hours/week)
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Week 1-2</div>
              <div className="text-sm text-blue-100">React.js Fundamentals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Week 3-4</div>
              <div className="text-sm text-blue-100">Node.js & Express</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Week 5-6</div>
              <div className="text-sm text-blue-100">MongoDB & Databases</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Week 7-8</div>
              <div className="text-sm text-blue-100">AWS & Deployment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillGap
