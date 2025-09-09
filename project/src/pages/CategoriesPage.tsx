import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEO/SEOHead';
import { useCategories, useBlogPosts } from '../hooks/useBlogAPI';
import { BookOpen } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { categories } = useCategories();
  const { posts } = useBlogPosts();

  const getCategoryPostCount = (categoryId: string) => {
    return posts.filter(post => post.category.id === categoryId).length;
  };

  return (
    <>
      <SEOHead
        title="Categories | TechBlog"
        description="Browse articles by category - web development, SEO, digital marketing, and more technical topics."
        keywords={['categories', 'blog topics', 'web development', 'SEO', 'digital marketing']}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of articles organized by topic. 
              Find exactly what you're looking for in web development, SEO, and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                    style={{ backgroundColor: category.color }}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {getCategoryPostCount(category.id)} articles
                    </span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};