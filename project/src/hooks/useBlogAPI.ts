import { useState, useEffect } from 'react';
import { BlogPost, Category, Tag } from '../types/blog';

// Mock API functions - replace with actual API calls
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Advanced SEO Strategies for Modern Web Applications',
    slug: 'advanced-seo-strategies-modern-web-apps',
    excerpt: 'Discover cutting-edge SEO techniques that can boost your website\'s search rankings and drive organic traffic in 2025.',
    content: `# Advanced SEO Strategies for Modern Web Applications

In today's competitive digital landscape, mastering SEO is crucial for web application success. This comprehensive guide covers the latest strategies and techniques.

## Core SEO Fundamentals

Search Engine Optimization has evolved significantly, requiring a holistic approach that combines technical excellence with user experience optimization.

### Technical SEO
- Page speed optimization
- Mobile-first indexing
- Core Web Vitals
- Structured data implementation

### Content Strategy
- Keyword research and targeting
- Content clustering
- User intent optimization
- E-A-T (Expertise, Authoritativeness, Trustworthiness)

## Advanced Implementation

Modern SEO requires sophisticated implementation strategies that go beyond basic optimization.`,
    featuredImage: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      bio: 'SEO Specialist and Web Performance Expert',
      social: {
        twitter: 'sarahchen_seo',
        linkedin: 'sarahchen'
      }
    },
    publishedAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
    tags: [
      { id: '1', name: 'SEO', slug: 'seo' },
      { id: '2', name: 'Web Performance', slug: 'web-performance' }
    ],
    category: {
      id: '1',
      name: 'Digital Marketing',
      slug: 'digital-marketing',
      description: 'Latest trends in digital marketing and SEO',
      color: '#3B82F6'
    },
    readingTime: 8,
    seo: {
      metaTitle: 'Advanced SEO Strategies for Modern Web Applications | TechBlog',
      metaDescription: 'Learn cutting-edge SEO techniques to boost your website rankings and drive organic traffic in 2025.',
      keywords: ['SEO', 'web applications', 'search optimization', 'digital marketing']
    },
    status: 'published'
  },
  {
    id: '2',
    title: 'Building High-Performance React Applications',
    slug: 'building-high-performance-react-applications',
    excerpt: 'Learn how to optimize React applications for maximum performance, scalability, and user experience.',
    content: `# Building High-Performance React Applications

Performance is critical for user experience and SEO rankings. This guide covers essential optimization techniques.

## Performance Optimization Techniques

### Code Splitting
- Dynamic imports
- Route-based splitting
- Component-level splitting

### State Management
- Efficient state updates
- Memoization strategies
- Context optimization

## Advanced Patterns

Modern React development requires understanding of advanced patterns and optimization techniques.`,
    featuredImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      id: '2',
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      bio: 'Frontend Architect and React Expert',
      social: {
        github: 'mrodriguez-dev',
        twitter: 'mike_codes'
      }
    },
    publishedAt: '2025-01-14T14:30:00Z',
    updatedAt: '2025-01-14T14:30:00Z',
    tags: [
      { id: '3', name: 'React', slug: 'react' },
      { id: '2', name: 'Web Performance', slug: 'web-performance' }
    ],
    category: {
      id: '2',
      name: 'Development',
      slug: 'development',
      description: 'Web development tutorials and best practices',
      color: '#10B981'
    },
    readingTime: 12,
    seo: {
      metaTitle: 'Building High-Performance React Applications | TechBlog',
      metaDescription: 'Optimize React applications for maximum performance, scalability, and user experience with expert techniques.',
      keywords: ['React', 'performance', 'optimization', 'web development']
    },
    status: 'published'
  },
  {
    id: '3',
    title: 'The Future of Web Development: Trends for 2025',
    slug: 'future-web-development-trends-2025',
    excerpt: 'Explore the emerging technologies and methodologies shaping the future of web development.',
    content: `# The Future of Web Development: Trends for 2025

Web development continues to evolve rapidly. Stay ahead with these emerging trends and technologies.

## Emerging Technologies

### WebAssembly Integration
- Performance-critical applications
- Cross-platform compatibility
- Legacy system integration

### Edge Computing
- Reduced latency
- Better user experience
- Distributed architectures

## Development Methodologies

Modern approaches to building and deploying web applications are changing the landscape.`,
    featuredImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      bio: 'SEO Specialist and Web Performance Expert',
      social: {
        twitter: 'sarahchen_seo',
        linkedin: 'sarahchen'
      }
    },
    publishedAt: '2025-01-13T09:15:00Z',
    updatedAt: '2025-01-13T09:15:00Z',
    tags: [
      { id: '4', name: 'Trends', slug: 'trends' },
      { id: '5', name: 'Future Tech', slug: 'future-tech' }
    ],
    category: {
      id: '3',
      name: 'Industry News',
      slug: 'industry-news',
      description: 'Latest news and trends in tech industry',
      color: '#F59E0B'
    },
    readingTime: 6,
    seo: {
      metaTitle: 'The Future of Web Development: Trends for 2025 | TechBlog',
      metaDescription: 'Explore emerging technologies and methodologies shaping the future of web development in 2025.',
      keywords: ['web development', 'trends 2025', 'future tech', 'emerging technologies']
    },
    status: 'published'
  }
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  return { posts, loading };
};

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = mockPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }, 300);
  }, [slug]);

  return { post, loading };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const uniqueCategories = mockPosts.reduce((acc, post) => {
      const exists = acc.find(cat => cat.id === post.category.id);
      if (!exists) {
        acc.push(post.category);
      }
      return acc;
    }, [] as Category[]);
    
    setCategories(uniqueCategories);
  }, []);

  return { categories };
};