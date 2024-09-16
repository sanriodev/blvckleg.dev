import React, { useState, useEffect } from 'react';
import { blogPosts, BlogPostsType } from '../../components/blogs/blog-posts';
import { Typography } from '@material-tailwind/react';

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
        <img
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
          #blog #post
        </Typography>
        <Typography
          variant='h2'
          color='blue-gray'
          className='my-4 font-black text-4xl !leading-snug'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          The Castle Looks Different at Night...
        </Typography>
        <Typography
          className='font-normal !text-gray-500'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he
          wouldn&apos;t scroll to get here. Add a button if you want the user to
          see more. We are here to make life better.
          <br />
          <br />
          And now I look and look around and there•s so many Kanyes I&apos;ve
          been trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.
          <br />
          <br />
          Thank you Anna for the invite thank you to the whole Vogue team And I
          love you like Kanye loves Kanye Pand Pand Panda I&apos;ve been trying
          to figure out the bed design for the master bedroom at our Hidden
          Hills compound...The Pablo pop up was almost a pop up of influence.
          All respect prayers and love to Phife•s family Thank you for so much
          inspiration daytime I love this new Ferg album! The Life of Pablo is
          now available for purchase I have a dream. Thank you to everybody who
          made The Life of Pablo the number 1 album in the world! I&apos;m so
          proud of the nr #1 song in the country. Panda!
        </Typography>
      </div>
    </section>
  );
};

export default Blog;
