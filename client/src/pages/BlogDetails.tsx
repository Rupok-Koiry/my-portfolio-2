import React from "react";
import ErrorMessage from "../components/ErrorMessage";
import { useBlog } from "../hooks/blogs/useBlog";
import Spinner from "../components/Spinner";

const BlogDetails: React.FC = () => {
  const { blog, isLoading, error } = useBlog();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage message="Blog not found" />;
  }

  return (
    <div className="min-h-screen bg-default text-default">
      {/* Hero Section */}
      <div
        className="relative h-96 w-full bg-cover bg-center rounded-b-lg  overflow-hidden"
        style={{ backgroundImage: `url(${blog.img})` }}
      >
        <div className="absolute inset-0 bg-primary-gradient opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h2 className=" font-extrabold text-white text-4xl lg:text-5xl font-raleway">
            {blog.title}
          </h2>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-14">
        {/* Author & Published Date */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-secondary">
            By <span className="font-semibold text-default">{blog.author}</span>
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-10">
          <h3 className="mb-3 text-xl font-semibold text-primary">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-primary-gradient px-4 py-1 text-sm font-medium text-white shadow-md uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-lg max-w-none lg:prose-xl">
          <h3 className="mb-6 text-3xl font-bold text-primary font-raleway">
            Introduction
          </h3>
          <div
            className="rounded-lg border-l-4 border-primary bg-gray-100 p-4 text-gray-800"
            dangerouslySetInnerHTML={{
              __html: blog.content.slice(0, 200),
            }}
          />
          <h3 className="mt-10 mb-6 text-3xl font-bold text-primary font-raleway">
            Full Article
          </h3>
          <div
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
