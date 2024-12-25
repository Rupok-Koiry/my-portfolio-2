import { FaPlus, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import Button from "../SubmitButton";
import { useState } from "react";
import ProjectModal from "../modals/ProjectModal";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useProjects } from "../../hooks/projects/useProjects";
import { useDeleteProject } from "../../hooks/projects/useDeleteProject";

const ProjectTable = () => {
  const { projects, error, isLoading } = useProjects();
  const { deleteProject } = useDeleteProject();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!projects.length) return <ErrorMessage message={"No Projects Found"} />;

  return (
    <div className="shadow overflow-x-auto rounded-lg border-primary border-2">
      <table className="min-w-full text-sm text-secondary-text">
        <thead className="bg-secondary-background text-xs uppercase font-medium text-primary-text">
          <tr>
            <th></th>
            <th className="px-6 py-3 text-left tracking-wider">Title</th>
            <th className="px-6 py-3 text-left tracking-wider">Description</th>
            <th className="px-6 py-3 text-left tracking-wider">Main Tech</th>
            <th className="px-6 py-3 text-left tracking-wider">Tech Stack</th>
            <th className="px-6 py-3 text-left tracking-wider">Live Link</th>
            <th className="px-6 py-3 text-left tracking-wider">Tag</th>
            <th className="px-6 py-3 text-left tracking-wider flex items-center gap-3">
              Actions
              <Button
                className="text-sm py-2 px-2"
                onClick={() => {
                  setSelectedProject(null);
                  setModalIsOpen(true);
                }}
              >
                <FaPlus />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-primary-background">
          {projects.map((project: any, index: number) => (
            <tr
              key={project._id}
              className={`${
                index % 2 === 0 ? "bg-secondary-background bg-opacity-20" : ""
              }`}
            >
              <td className="pl-4">{index + 1}</td>

              <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {project.description.slice(0, 50)}...
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {project.mainTech}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {project.techStack.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue"
                >
                  Live
                </a>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">{project.tag}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => {
                    setSelectedProject(project);
                    setModalIsOpen(true);
                  }}
                >
                  <FaRegPenToSquare />
                </Button>
                <Button
                  className="text-sm py-2 px-2"
                  onClick={() => deleteProject(project._id)}
                >
                  <FaRegTrashCan />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProjectModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectTable;
