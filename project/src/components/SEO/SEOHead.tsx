import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../../types/blog';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  post?: BlogPost;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'TechBlog - Advanced Web Development & SEO Insights',
  description = 'Discover cutting-edge web development techniques, SEO strategies, and industry insights from expert developers.',
  keywords = ['web development', 'SEO', 'React', 'JavaScript', 'programming'],
  image = 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
  url = window.location.href,
  type = 'website',
  post
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    ...(type === 'article' && post ? {
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author.name,
        image: post.author.avatar
      },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      image: post.featuredImage,
      publisher: {
        '@type': 'Organization',
        name: 'TechBlog',
        logo: {
          '@type': 'ImageObject',
          url: '/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    } : {
      name: 'TechBlog',
      description,
      url: 'https://techblog.com'
    })
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="TechBlog" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific meta */}
      {post && (
        <>
          <meta property="article:published_time" content={post.publishedAt} />
          <meta property="article:modified_time" content={post.updatedAt} />
          <meta property="article:author" content={post.author.name} />
          <meta property="article:section" content={post.category.name} />
          {post.tags.map(tag => (
            <meta key={tag.id} property="article:tag" content={tag.name} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};