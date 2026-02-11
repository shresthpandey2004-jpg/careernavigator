import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, GraduationCap, MapPin, Plus, X, Save } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

const Profile = () => {
  const { user } = useAuthStore()
  const [editing, setEditing] = useState(false)
  const [skills, setSkills] = useState(['React', 'Node.js', 'TypeScript', 'MongoDB'])
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-slate-600">Manage your personal information and skills</p>
        </motion.div>

        {/* Profile Header */}
        <div className="card mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user?.name?.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className="text-slate-600">{user?.email}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    Profile {user?.profileComplete ? 'Complete' : 'Incomplete'}
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    Strength: 75%
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              className="btn-secondary"
            >
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="card mb-6">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user?.name}
                disabled={!editing}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled={!editing}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <GraduationCap className="inline w-4 h-4 mr-2" />
                College
              </label>
              <input
                type="text"
                placeholder="Your College Name"
                disabled={!editing}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-2" />
                Location
              </label>
              <input
                type="text"
                placeholder="City, Country"
                disabled={!editing}
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="card mb-6">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
              >
                <span>{skill}</span>
                {editing && (
                  <button
                    onClick={() => removeSkill(index)}
                    className="hover:text-blue-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          {editing && (
            <div className="flex space-x-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                placeholder="Add a skill"
                className="input-field flex-1"
              />
              <button onClick={addSkill} className="btn-primary">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Academic Details */}
        <div className="card mb-6">
          <h3 className="text-xl font-bold mb-4">Academic Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Degree
              </label>
              <select disabled={!editing} className="input-field">
                <option>B.Tech</option>
                <option>B.E</option>
                <option>BCA</option>
                <option>MCA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Branch
              </label>
              <input
                type="text"
                placeholder="Computer Science"
                disabled={!editing}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                CGPA
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="8.5"
                disabled={!editing}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Graduation Year
              </label>
              <input
                type="number"
                placeholder="2026"
                disabled={!editing}
                className="input-field"
              />
            </div>
          </div>
        </div>

        {editing && (
          <div className="flex justify-end space-x-4">
            <button onClick={() => setEditing(false)} className="btn-secondary">
              Cancel
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
