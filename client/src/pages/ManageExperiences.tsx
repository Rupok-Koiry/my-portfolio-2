import ExperienceTable from "../components/tables/ExperienceTable";

const ManageExperiences = () => {
  return (
    <section className="py-8 lg:py-10">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center text-primary-text mb-8">
        Manage Experiences
      </h2>
      <ExperienceTable />
    </section>
  );
};

export default ManageExperiences;
