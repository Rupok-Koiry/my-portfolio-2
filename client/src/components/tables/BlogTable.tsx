import { useState } from "react";
import { useBlogs } from "../../hooks/blogs/useBlogs";
import { useDeleteBlog } from "../../hooks/blogs/useDeleteBlog";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import Button from "../SubmitButton";
import { FaPlus } from "react-icons/fa";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import BlogModal from "../modals/BlogModal";

const BlogTable = () => {
  const { blogs, error, isLoading } = useBlogs();
  const { deleteBlog } = useDeleteBlog();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!blogs.length) return <ErrorMessage message={"No Blogs Found"} />;

  return (
    <div className="shadow overflow-x-auto rounded-lg border-primary border-2">
      <table className="min-w-full text-sm text-secondary-text">
        <thead className="bg-secondary-background text-xs uppercase font-medium text-primary-text">
          <tr>
            <th></th>
            <th className="px-6 py-3 text-left tracking-wider">Title</th>
            <th className="px-6 py-3 text-left tracking-wider">Author</th>
            <th className="px-6 py-3 text-left tracking-wider">Tags</th>
            <th className="px-6 py-3 text-left tracking-wider flex items-center gap-3">
              Actions
              <Button
                className="text-sm py-2 px-2"
                onClick={() => {
                  setSelectedBlog(null);
                  setModalIsOpen(true);
                }}
              >
                <FaPlus />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-primary-background">
          {blogs.map((blog: any, index: number) => (
            <tr
              key={blog._id}
              className={`${
                index % 2 === 0 ? "bg-secondary-background bg-opacity-20" : ""
              }`}
            >
              <td className="pl-4">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{blog.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {blog.tags.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => {
                    setSelectedBlog(blog);
                    setModalIsOpen(true);
                  }}
                >
                  <FaRegPenToSquare />
                </Button>
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => deleteBlog(blog._id)}
                >
                  <FaRegTrashCan />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BlogModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        blog={selectedBlog}
      />
    </div>
  );
};

export default BlogTable;
