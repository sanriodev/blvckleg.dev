import { Typography } from '@material-tailwind/react';
import { BlogContentCard } from '../../components/blog-card';
import { blogPosts } from '../../components/blogs/blog-posts';

export function BlogSection() {
  return (
    <section className='py-28 px-8'>
      <div className='container mx-auto mb-20 text-center'>
        <Typography
          variant='h2'
          color='blue-gray'
          className='mb-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Build something great
        </Typography>
        <Typography
          variant='lead'
          className='mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          I&apos;m constantly trying to express myself and actualize my dreams.
          If you have the opportunity to play this game of life you need to
          appreciate every moment.
        </Typography>
      </div>

      <div className='mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2'>
        {blogPosts.map(({ img, title, desc, blogId }) => (
          <BlogContentCard
            key={title}
            img={img}
            title={title}
            desc={desc}
            blogId={blogId}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
