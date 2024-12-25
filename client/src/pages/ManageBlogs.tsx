import BlogTable from "../components/tables/BlogTable";

const ManageBlogs = () => {
  return (
    <section className="py-8 lg:py-10">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center text-primary-text mb-8">
        Manage Blogs
      </h2>
      <BlogTable />
    </section>
  );
};

export default ManageBlogs;
