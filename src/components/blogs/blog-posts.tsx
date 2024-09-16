import { Blog1 } from './blog1';

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
    img: '/blog-card/building-RESTful-API-with-nest.png',
    title: 'Building a RESTful API with NestJS',
    desc: 'NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
    content: Blog1,
  },
  {
    blogId: '2',
    img: 'https://www.material-tailwind.com/image/blog-10.jpeg',
    title: 'Last visits in US',
    desc: 'Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.',
  },
  {
    blogId: '3',
    img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg',
    title: 'Grow in a beautiful area',
    desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
  },
];
