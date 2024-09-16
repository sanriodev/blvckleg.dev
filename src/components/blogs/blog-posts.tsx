import { Blog1 } from './blog1';
import { Blog2 } from './blog2';

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
  // {
  //   blogId: '3',
  //   img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg',
  //   title: 'Grow in a beautiful area',
  //   desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
  // },
];
