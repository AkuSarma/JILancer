import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      description: 'Learn the basics of React hooks and how to use them in your projects.',
      image: '/assets/blog/react-hooks.jpg',
      date: 'August 10, 2024',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      description: 'A comprehensive guide to styling your web projects with Tailwind CSS.',
      image: '/assets/blog/tailwind-css.jpg',
      date: 'September 5, 2024',
    },
    {
      id: 3,
      title: 'Best Practices for JavaScript',
      description: 'Top tips and tricks for writing clean and efficient JavaScript code.',
      image: '/assets/blog/js-best-practices.jpg',
      date: 'September 12, 2024',
    },
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Blog Posts</h1>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="relative bg-gray-200 rounded-3xl overflow-hidden">
          <img
            src="/assets/blog/featured-article.jpg"
            alt="Featured Article"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
            <h2 className="text-3xl font-extrabold mb-4">Featured: How to Build Modern Web Apps</h2>
            <p className="text-lg mb-4">Discover the latest trends and techniques in web development, including React, Tailwind CSS, and more.</p>
            <Link to="/blog/featured-article" className="text-lg underline">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Post List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <p className="text-gray-500 mb-4 text-sm">{post.date}</p>
              <Link to={`/blog/${post.id}`} className="text-primaryColor underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
