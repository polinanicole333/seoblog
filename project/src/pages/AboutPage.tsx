import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEO/SEOHead';
import { Users, Target, Award, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Expert Content',
      description: 'Every article is crafted by industry experts with years of hands-on experience.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge',
      description: 'We stay ahead of trends, bringing you the latest techniques and technologies.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built for developers, by developers. Join our growing community of learners.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'High-quality, actionable content that helps you build better web applications.'
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us | TechBlog"
        description="Learn about TechBlog - your premier destination for advanced web development techniques, SEO strategies, and cutting-edge technology insights."
        keywords={['about techblog', 'web development blog', 'tech community', 'programming resources']}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About TechBlog
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're passionate about sharing cutting-edge web development knowledge, 
                SEO expertise, and technology insights to help developers build better, 
                faster, and more successful web applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower developers and digital professionals with the knowledge, 
                tools, and insights they need to excel in the ever-evolving world 
                of web development and digital marketing. We believe that quality 
                education should be accessible to everyone, regardless of their 
                experience level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Growing Together
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Articles Published</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Monthly Readers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">200K+</div>
                  <div className="text-gray-600">Page Views</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                Our diverse team of experts brings together years of experience 
                in web development, SEO, and digital marketing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Sarah Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
                <p className="text-blue-600 mb-3">SEO Specialist & Web Performance Expert</p>
                <p className="text-gray-600 text-sm">
                  10+ years optimizing websites for search engines and performance. 
                  Passionate about technical SEO and Core Web Vitals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Michael Rodriguez"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
                <p className="text-blue-600 mb-3">Frontend Architect & React Expert</p>
                <p className="text-gray-600 text-sm">
                  Frontend architect with expertise in React, TypeScript, and modern 
                  web technologies. Loves building scalable applications.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Stay updated with the latest articles, tips, and insights. 
                Join thousands of developers who trust TechBlog for their learning journey.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};