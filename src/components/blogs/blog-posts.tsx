import { Blog1 } from './blog1';
import { Blog2 } from './blog2';
import { Blog3 } from './blog3';

export interface BlogPostsType {
  blogId: string;
  img: string;
  title: string;
  desc: string;
  content?: JSX.Element;
}

export const blogPosts: BlogPostsType[] = [
  {
    blogId: '1',
    img: '/blog-card/building-RESTful-API-with-nest-microservices.png',
    title: 'My little "Hello World" blog.',
    desc: '#helloblog',
    content: Blog1,
  },
  {
    blogId: '2',
    img: '/blog-card/microservices.png',
    title:
      'Exploring Microservices Architecture: Why I use it and why you should too',
    desc: '#microservices #architecture #discussion',
    content: Blog2,
  },
  {
    blogId: '3',
    img: '/blog-card/blog.blvckleg.dev.png',
    title: 'blog.blvckleg.dev',
    desc: '#news',
    content: Blog3,
  },
];
