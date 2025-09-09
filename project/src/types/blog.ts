export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  tags: Tag[];
  category: Category;
  readingTime: number;
  seo: SEOData;
  status: 'published' | 'draft' | 'archived';
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  replies: Comment[];
  approved: boolean;
}