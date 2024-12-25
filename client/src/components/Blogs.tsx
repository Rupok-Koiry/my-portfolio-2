import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import { Element } from "react-scroll";
import { useBlogs } from "../hooks/blogs/useBlogs";

const Blogs: React.FC = () => {
  const { blogs } = useBlogs();

  return (
    <Element name="blog">
      <Section>
        <SectionTitle
          subtitle="My Latest Blogs"
          title="My Blogs"
          className="text-center"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {blogs?.map((blog: any, index: number) => (
            <div
              key={index}
              className="gradient-transition group flex cursor-pointer flex-col items-start rounded-xl bg-default p-4 shadow-default lg:p-6"
            >
              <div className="mb-4 overflow-hidden rounded-lg shadow-lg lg:mb-6">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full rounded-lg transition-transform duration-300 ease-in group-hover:scale-105"
                />
              </div>
              <span className="rounded-full bg-primary-gradient px-4 py-1 text-xs font-medium uppercase tracking-wider text-white lg:text-sm">
                {blog.tags.join(", ") || "No Tags"}
              </span>
              <h3 className="mb-4 mt-3 text-2xl font-semibold transition-colors duration-300 ease-in group-hover:text-primary lg:mb-6 lg:text-3xl font-raleway">
                {blog.title}
              </h3>
              <p className="mb-2 text-sm font-medium text-gray-500">
                By {blog.author}
              </p>
              <Button
                className="mt-auto flex items-center justify-between"
                href={`/blog/${blog._id}`}
                target="_self"
              >
                View Details
                <GoArrowUpRight className="text-2xl" />
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </Element>
  );
};

export default Blogs;
