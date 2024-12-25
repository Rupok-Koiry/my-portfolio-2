import SkillTable from "../components/tables/SkillTable";

const ManageSkills = () => {
  return (
    <section className="py-8 lg:py-10">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center text-primary-text mb-8">
        Manage Skills
      </h2>
      <SkillTable />
    </section>
  );
};

export default ManageSkills;
