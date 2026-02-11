import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Compass,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Brain,
  BarChart,
} from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Career DNA Analyzer',
      description: 'AI-powered assessment to find your perfect career match with 85%+ accuracy',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills and get personalized learning roadmaps',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Smart Job Matching',
      description: 'AI matches you with relevant jobs from 1000+ companies',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Market Intelligence',
      description: 'Real-time salary data, trends, and hiring insights',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentor Matching',
      description: 'Connect with industry professionals for guidance',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Interview Prep',
      description: 'AI-powered mock interviews with real-time feedback',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const stats = [
    { number: '5000+', label: 'Students Helped' },
    { number: '1000+', label: 'Job Opportunities' },
    { number: '85%', label: 'Success Rate' },
    { number: '50+', label: 'Partner Companies' },
  ]

  const steps = [
    {
      number: '01',
      title: 'Create Profile',
      description: 'Sign up and complete your profile with skills and interests',
    },
    {
      number: '02',
      title: 'Take Assessment',
      description: 'Complete our AI-powered career assessment quiz',
    },
    {
      number: '03',
      title: 'Get Your DNA',
      description: 'Receive personalized career recommendations',
    },
    {
      number: '04',
      title: 'Start Journey',
      description: 'Follow your roadmap and apply to matched jobs',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">AI-Powered Career Guidance</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find Your Perfect
              <br />
              <span className="gradient-text">Career Path</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Navigate your career journey with AI-powered insights, personalized roadmaps,
              and smart job matching. Join 5000+ students who found their dream careers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="btn-primary text-lg px-8 py-4 group">
                Get Started Free
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="btn-secondary text-lg px-8 py-4">
                Sign In
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center space-x-8 text-sm text-slate-500"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free Forever</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="gradient-text"> Succeed</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive tools and insights to guide your career journey from confusion to clarity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card glow-effect group hover:scale-105 transition-transform duration-300"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-slate-600">
              Get started in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <Zap className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Navigate Your Career?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students who found their perfect career path
            </p>
            <Link
              to="/register"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Start Your Journey Today
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default LandingPage
