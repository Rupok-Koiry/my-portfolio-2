import ProjectTable from "../components/tables/ProjectTable";

const ManageProjects = () => {
  return (
    <section className="py-8 lg:py-10">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center text-primary-text mb-8">
        Manage Projects
      </h2>
      <ProjectTable />
    </section>
  );
};

export default ManageProjects;
