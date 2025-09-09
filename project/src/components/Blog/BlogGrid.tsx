import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';
import { BlogPost } from '../../types/blog';

interface BlogGridProps {
  posts: BlogPost[];
  loading?: boolean;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-6 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {posts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BlogCard post={posts[0]} featured />
        </motion.div>
      )}

      {/* Regular Grid */}
      {posts.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </div>
  );
};