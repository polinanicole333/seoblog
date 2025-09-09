import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
        featured ? 'lg:flex' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : 'aspect-video'}`}>
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: post.category.color }}
          >
            {post.category.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
            </time>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <Link to={`/blog/${post.slug}`} className="group-hover:text-blue-600 transition-colors">
          <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag.id}
              to={`/tag/${tag.slug}`}
              className="inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Tag className="w-3 h-3" />
              <span>{tag.name}</span>
            </Link>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-900">
                {post.author.name}
              </span>
            </div>
            <p className="text-xs text-gray-500">{post.author.bio}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};