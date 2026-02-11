import { motion } from 'framer-motion'
import { Briefcase, Clock, CheckCircle, XCircle, AlertCircle, Calendar } from 'lucide-react'

const Applications = () => {
  const applications = [
    {
      id: '1',
      job: {
        title: 'Backend Developer',
        company: 'TechCorp',
        location: 'Bangalore',
      },
      status: 'interview',
      appliedDate: '2024-01-15',
      lastUpdated: '2024-01-20',
      notes: 'Interview scheduled for next week',
    },
    {
      id: '2',
      job: {
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        location: 'Mumbai',
      },
      status: 'screening',
      appliedDate: '2024-01-18',
      lastUpdated: '2024-01-19',
      notes: 'Waiting for HR response',
    },
    {
      id: '3',
      job: {
        title: 'Frontend Developer',
        company: 'DesignHub',
        location: 'Remote',
      },
      status: 'rejected',
      appliedDate: '2024-01-10',
      lastUpdated: '2024-01-17',
      notes: 'Position filled',
    },
  ]

  const stats = {
    total: 15,
    pending: 5,
    interview: 3,
    rejected: 7,
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'interview':
        return <Calendar className="w-5 h-5" />
      case 'screening':
        return <Clock className="w-5 h-5" />
      case 'rejected':
        return <XCircle className="w-5 h-5" />
      case 'offer':
        return <CheckCircle className="w-5 h-5" />
      default:
        return <AlertCircle className="w-5 h-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'interview':
        return 'bg-blue-100 text-blue-600'
      case 'screening':
        return 'bg-yellow-100 text-yellow-600'
      case 'rejected':
        return 'bg-red-100 text-red-600'
      case 'offer':
        return 'bg-green-100 text-green-600'
      default:
        return 'bg-slate-100 text-slate-600'
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">My Applications</h1>
          <p className="text-slate-600">Track all your job applications in one place</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="text-3xl font-bold mb-1">{stats.total}</div>
            <div className="text-slate-600">Total Applied</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-yellow-600 mb-1">{stats.pending}</div>
            <div className="text-slate-600">Pending</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-blue-600 mb-1">{stats.interview}</div>
            <div className="text-slate-600">Interviews</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-red-600 mb-1">{stats.rejected}</div>
            <div className="text-slate-600">Rejected</div>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {applications.map((application, index) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">{application.job.title}</h3>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      <span className="capitalize">{application.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-slate-600 mb-3">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{application.job.company}</span>
                    </span>
                    <span>{application.job.location}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Applied:</span>
                      <span className="ml-2 font-medium">
                        {new Date(application.appliedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-600">Last Updated:</span>
                      <span className="ml-2 font-medium">
                        {new Date(application.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  {application.notes && (
                    <div className="mt-3 p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Notes: </span>
                      <span className="text-sm">{application.notes}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-slate-200">
                <button className="btn-secondary">View Details</button>
                <button className="btn-secondary">Add Notes</button>
                {application.status === 'interview' && (
                  <button className="btn-primary">Prepare Interview</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no applications) */}
        {applications.length === 0 && (
          <div className="card text-center py-12">
            <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Applications Yet</h3>
            <p className="text-slate-600 mb-6">
              Start applying to jobs that match your profile
            </p>
            <button className="btn-primary">Browse Jobs</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Applications
