import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, TrendingUp, DollarSign, Target, ArrowRight } from 'lucide-react'

const CareerDNA = () => {
  const [step, setStep] = useState<'intro' | 'assessment' | 'results'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    {
      question: 'What type of work environment do you prefer?',
      options: ['Collaborative team', 'Independent work', 'Mix of both', 'Remote/Flexible'],
    },
    {
      question: 'Which skills do you enjoy using most?',
      options: ['Problem solving', 'Creative design', 'Data analysis', 'Communication'],
    },
    {
      question: 'What motivates you in your career?',
      options: ['High salary', 'Work-life balance', 'Learning opportunities', 'Impact/Purpose'],
    },
  ]

  const careerPaths = [
    {
      title: 'Backend Developer',
      match: 85,
      salary: { min: 600000, max: 1200000 },
      growth: 'High',
      skills: ['Node.js', 'Python', 'Databases', 'APIs'],
      description: 'Build server-side applications and APIs',
    },
    {
      title: 'Full Stack Developer',
      match: 78,
      salary: { min: 700000, max: 1500000 },
      growth: 'Very High',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Work on both frontend and backend',
    },
    {
      title: 'Data Analyst',
      match: 72,
      salary: { min: 500000, max: 1000000 },
      growth: 'High',
      skills: ['Python', 'SQL', 'Excel', 'Tableau'],
      description: 'Analyze data to drive business decisions',
    },
  ]

  const startAssessment = () => setStep('assessment')
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStep('results')
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {step === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Career DNA Analyzer</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Discover your perfect career path with our AI-powered assessment.
              Answer a few questions and get personalized career recommendations.
            </p>
            <div className="card text-left mb-8">
              <h3 className="text-xl font-bold mb-4">What you'll get:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Top 5 career paths matched to your profile</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Match percentage for each career</span>
                </li>
                <li className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Salary ranges and growth potential</span>
                </li>
              </ul>
            </div>
            <button onClick={startAssessment} className="btn-primary text-lg px-8 py-4">
              Start Assessment
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </motion.div>
        )}

        {step === 'assessment' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <div className="mb-6">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextQuestion}
                  className="w-full text-left p-4 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'results' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">Your Career DNA Results</h1>
              <p className="text-slate-600">Here are your top career matches</p>
            </div>

            <div className="space-y-6">
              {careerPaths.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:scale-105 transition-transform"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{career.title}</h3>
                      <p className="text-slate-600">{career.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold gradient-text">{career.match}%</div>
                      <div className="text-sm text-slate-600">Match</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Salary Range</div>
                      <div className="font-semibold">
                        ₹{(career.salary.min / 100000).toFixed(1)}L - ₹{(career.salary.max / 100000).toFixed(1)}L
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Growth Potential</div>
                      <div className="font-semibold text-green-600">{career.growth}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Required Skills</div>
                      <div className="font-semibold">{career.skills.length} skills</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="btn-primary w-full">
                    View Skill Gap Analysis
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CareerDNA
