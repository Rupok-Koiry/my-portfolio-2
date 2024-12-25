import { useState } from "react";
import { FaPlus, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import Button from "../SubmitButton";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import ExperienceModal from "../modals/ExperienceModal";
import { useExperiences } from "../../hooks/experiences/useExperiences";
import { useDeleteExperience } from "../../hooks/experiences/useDeleteExperience";

const ExperienceTable = () => {
  const { experiences, error, isLoading } = useExperiences();
  const { deleteExperience } = useDeleteExperience();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!experiences.length)
    return <ErrorMessage message={"No Experiences Found"} />;

  return (
    <div className="shadow overflow-x-auto rounded-lg border-primary border-2">
      <table className="min-w-full text-sm text-secondary-text">
        <thead className="bg-secondary-background text-xs uppercase font-medium text-primary-text">
          <tr>
            <th></th>
            <th className="px-6 py-3 text-left tracking-wider">Title</th>
            <th className="px-6 py-3 text-left tracking-wider">Provider</th>
            <th className="px-6 py-3 text-left tracking-wider">Duration</th>
            <th className="px-6 py-3 text-left tracking-wider">Description</th>
            <th className="px-6 py-3 text-left tracking-wider flex items-center gap-3">
              Actions
              <Button
                className="text-sm py-2 px-2"
                onClick={() => {
                  setSelectedExperience(null);
                  setModalIsOpen(true);
                }}
              >
                <FaPlus />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-primary-background">
          {experiences.map((experience: any, index: number) => (
            <tr
              key={experience._id}
              className={`${
                index % 2 === 0 ? "bg-secondary-background bg-opacity-20" : ""
              }`}
            >
              <td className="pl-4">{index + 1}</td>

              <td className="px-6 py-4 whitespace-nowrap">
                {experience.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {experience.provider}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {experience.duration}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {experience.description.slice(0, 50)}...
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => {
                    setSelectedExperience(experience);
                    setModalIsOpen(true);
                  }}
                >
                  <FaRegPenToSquare />
                </Button>
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => deleteExperience(experience._id)}
                >
                  <FaRegTrashCan />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ExperienceModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        experience={selectedExperience}
      />
    </div>
  );
};

export default ExperienceTable;
