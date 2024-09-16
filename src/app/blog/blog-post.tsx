import React, { useState, useEffect } from 'react';
import { blogPosts, BlogPostsType } from '../../components/blogs/blog-posts';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostsType | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('blogId');
    const id = parseInt(ref ?? '1', 10);

    if (id) {
      setSelectedPost(
        blogPosts.find((elem) => elem.blogId == id?.toString()) || null
      );
    } else {
      setSelectedPost(blogPosts[Math.floor(Math.random() * blogPosts.length)]);
    }
  }, []);

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  return (
    <section className='p-8'>
      <div className='mx-auto max-w-screen-md'>
        <Image
          src={`${selectedPost.img}`}
          alt='title-image'
          className='mb-4 h-[28rem] w-full rounded-xl object-cover'
        />
        <Typography
          variant='small'
          className='font-medium !text-blue-500'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {selectedPost.desc}
        </Typography>
        <Typography
          variant='h2'
          color='blue-gray'
          className='my-4 font-black text-4xl !leading-snug'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {selectedPost.title}
        </Typography>

        {selectedPost.content}
      </div>
    </section>
  );
};

export default Blog;
