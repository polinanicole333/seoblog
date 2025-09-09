import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEO/SEOHead';
import { BlogGrid } from '../components/Blog/BlogGrid';
import { CategoryFilter } from '../components/Blog/CategoryFilter';
import { useBlogPosts, useCategories } from '../hooks/useBlogAPI';
import { ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { posts, loading } = useBlogPosts();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category.id === selectedCategory)
    : posts;

  const stats = [
    { icon: BookOpen, label: 'Articles', value: '150+' },
    { icon: Users, label: 'Readers', value: '50K+' },
    { icon: TrendingUp, label: 'Monthly Views', value: '200K+' }
  ];

  return (
    <>
      <SEOHead />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Advanced Web Development
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}& SEO Insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover cutting-edge techniques, expert strategies, and industry insights 
                to elevate your web development skills and boost your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Reading <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Subscribe to Newsletter
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest trends, techniques, and best practices 
                in web development and SEO.
              </p>
            </motion.div>

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <BlogGrid posts={filteredPosts} loading={loading} />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter and get the latest articles, tips, 
                and insights delivered directly to your inbox.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};