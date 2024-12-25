import { useState } from "react";
import { FaPlus, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import Button from "../SubmitButton";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import SkillModal from "../modals/SkillModal";
import { useSkills } from "../../hooks/skills/useSkills";
import { useDeleteSkill } from "../../hooks/skills/useDeleteSkill";

const SkillTable = () => {
  const { skills, error, isLoading } = useSkills();
  const { deleteSkill } = useDeleteSkill();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!skills.length) return <ErrorMessage message={"No Skills Found"} />;

  return (
    <div className="shadow overflow-x-auto rounded-lg border-primary border-2">
      <table className="min-w-full text-sm text-secondary-text">
        <thead className="bg-secondary-background text-xs uppercase font-medium text-primary-text">
          <tr>
            <th></th>
            <th className="px-6 py-3 text-left tracking-wider">Skill Name</th>
            <th className="px-6 py-3 text-left tracking-wider">
              Proficiency (%)
            </th>
            <th className="px-6 py-3 text-left tracking-wider flex items-center gap-3">
              Actions
              <Button
                className="text-sm py-2 px-2"
                onClick={() => {
                  setSelectedSkill(null);
                  setModalIsOpen(true);
                }}
              >
                <FaPlus />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-primary-background">
          {skills.map((skill: any, index: number) => (
            <tr
              key={skill._id}
              className={`${
                index % 2 === 0 ? "bg-secondary-background bg-opacity-20" : ""
              }`}
            >
              <td className="pl-4">{index + 1}</td>

              <td className="px-6 py-4 whitespace-nowrap">{skill.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {skill.percentage}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => {
                    setSelectedSkill(skill);
                    setModalIsOpen(true);
                  }}
                >
                  <FaRegPenToSquare />
                </Button>
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => deleteSkill(skill._id)}
                >
                  <FaRegTrashCan />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SkillModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        skill={selectedSkill}
      />
    </div>
  );
};

export default SkillTable;
