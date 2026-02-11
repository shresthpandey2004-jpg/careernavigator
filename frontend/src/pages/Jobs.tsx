import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Briefcase, DollarSign, Clock, Heart, ExternalLink } from 'lucide-react'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    location: 'all',
    jobType: 'all',
    experience: 'all',
  })

  const jobs = [
    {
      id: '1',
      title: 'Backend Developer',
      company: 'TechCorp',
      location: 'Bangalore',
      salary: { min: 600000, max: 1000000 },
      jobType: 'full-time',
      experienceLevel: 'entry-level',
      matchScore: 85,
      skills: ['Node.js', 'MongoDB', 'Express', 'REST APIs'],
      postedDate: '2 days ago',
      description: 'Looking for a passionate backend developer to join our growing team.',
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Mumbai',
      salary: { min: 700000, max: 1200000 },
      jobType: 'full-time',
      experienceLevel: 'entry-level',
      matchScore: 78,
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      postedDate: '1 week ago',
      description: 'Join our innovative startup and work on cutting-edge projects.',
    },
    {
      id: '3',
      title: 'Frontend Developer Intern',
      company: 'DesignHub',
      location: 'Remote',
      salary: { min: 200000, max: 300000 },
      jobType: 'internship',
      experienceLevel: 'internship',
      matchScore: 72,
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      postedDate: '3 days ago',
      description: 'Great opportunity for students to gain real-world experience.',
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Find Your Dream Job</h1>
          <p className="text-slate-600">Browse jobs matched to your profile</p>
        </motion.div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs, companies, skills..."
                className="input-field pl-10"
              />
            </div>
            <select
              value={selectedFilters.location}
              onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
              className="input-field"
            >
              <option value="all">All Locations</option>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
              <option value="remote">Remote</option>
            </select>
            <select
              value={selectedFilters.jobType}
              onChange={(e) => setSelectedFilters({ ...selectedFilters, jobType: e.target.value })}
              className="input-field"
            >
              <option value="all">All Types</option>
              <option value="full-time">Full Time</option>
              <option value="internship">Internship</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing <span className="font-semibold">{jobs.length}</span> jobs matched to your profile
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {job.matchScore}% Match
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-3">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.company}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>₹{(job.salary.min / 100000).toFixed(1)}L - ₹{(job.salary.max / 100000).toFixed(1)}L</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.postedDate}</span>
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group/heart">
                  <Heart className="w-6 h-6 text-slate-400 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-all" />
                </button>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-slate-200">
                <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="btn-secondary">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="btn-secondary">Load More Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Jobs
