import React, { useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import { Element } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { PiBoundingBox, PiPaintBrushHousehold } from "react-icons/pi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import FilterTags from "./FilterTags";
import { useProjects } from "../hooks/projects/useProjects";
import { portfolio } from "../data/data";

const tags = [
  {
    name: "all",
    icon: HiMiniBars3CenterLeft,
  },
  {
    name: "development",
    icon: PiBoundingBox,
  },
  {
    name: "design",
    icon: PiPaintBrushHousehold,
  },
];

const Portfolio: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const { projects } = useProjects();

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const filteredProject =
    selectedTag === "all"
      ? projects
      : projects?.filter((item: any) => item.tag === selectedTag);
  const filteredPortfolio =
    selectedTag === "all"
      ? portfolio
      : portfolio.filter((item: any) => item.tag === selectedTag);

  return (
    <Element name="portfolio">
      <Section>
        <SectionTitle
          subtitle="VISIT MY PORTFOLIO"
          title="My Portfolio"
          className="text-center"
        />
        <FilterTags
          tags={tags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {filteredProject?.map((project: any, index: number) => (
            <div
              key={index}
              className="gradient-transition group flex cursor-pointer flex-col items-start rounded-xl bg-default p-4 shadow-default lg:p-6"
              onClick={() => openModal(project)}
            >
              <div className="mb-4 overflow-hidden rounded-lg shadow-lg lg:mb-6">
                <img
                  src={
                    project.img ||
                    filteredPortfolio.find(
                      (item) => item.title === project.title
                    )?.img
                  }
                  alt={project.title}
                  className="w-full rounded-lg transition-transform duration-300 ease-in group-hover:scale-105"
                />
              </div>
              <span className="rounded-full bg-primary-gradient px-4 py-1 text-xs font-medium uppercase tracking-wider text-white lg:text-sm">
                {project.mainTech}
              </span>
              <h3
                className={`mb-4 mt-3 text-2xl font-semibold transition-colors duration-300 ease-in group-hover:text-primary lg:mb-6 lg:text-3xl font-raleway`}
              >
                {project.title}
              </h3>
              <Button className="mt-auto flex items-center justify-between">
                View Details
                <GoArrowUpRight className="text-2xl" />
              </Button>
            </div>
          ))}
        </div>
        <PortfolioModal
          selectedProject={selectedProject}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </Section>
    </Element>
  );
};
type PortfolioModalProps = {
  selectedProject: any;
  modalIsOpen: boolean;
  closeModal: () => void;
};
const PortfolioModal = ({
  selectedProject,
  modalIsOpen,
  closeModal,
}: PortfolioModalProps) => {
  return (
    <AnimatePresence>
      {selectedProject && modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="container z-50 mx-5"
          overlayClassName="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[80vh] overflow-auto rounded-xl bg-default p-6 shadow-default"
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-default p-2 text-2xl text-primary shadow-default transition-transform duration-300 will-change-transform hover:scale-90 lg:text-3xl"
            >
              <RxCross2 />
            </button>
            <div className="mt-10 grid items-center gap-8 md:grid-cols-2 lg:mt-12">
              <img
                src={
                  selectedProject.img ||
                  portfolio.find((item) => item.title === selectedProject.title)
                    ?.img
                }
                alt={selectedProject.title}
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="overflow-auto">
                <h2
                  className={`mb-2 text-2xl font-semibold text-primary lg:text-3xl font-raleway`}
                >
                  {selectedProject.title}
                </h2>
                <p className="mb-5 text-sm text-secondary md:text-base lg:text-lg">
                  {selectedProject.description}
                </p>
                <p className="mb-3 text-base lg:text-xl">
                  <span className="font-medium">Main Tech:</span>{" "}
                  <span className="rounded-full bg-primary-gradient px-4 py-1 text-xs font-medium uppercase tracking-wider text-white lg:text-sm">
                    {selectedProject.mainTech}
                  </span>
                </p>
                <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center">
                  <span className="whitespace-nowrap text-base font-medium lg:text-xl">
                    Tech Stacks:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(
                      (tech: any, index: number) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary-gradient px-4 py-1 text-xs font-medium uppercase tracking-wider text-white lg:text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <p className="mb-2 text-base lg:text-xl">
                  <span className="font-medium">Highlights:</span>{" "}
                </p>
                <ul className="mb-5 ml-6 list-disc">
                  {selectedProject.highlights.map(
                    (highlight: any, index: number) => (
                      <li
                        key={index}
                        className="text-sm text-secondary md:text-base lg:text-lg"
                      >
                        {highlight}
                      </li>
                    )
                  )}
                </ul>
                <div className="flex space-x-4">
                  {selectedProject.githubLink && (
                    <Button href={selectedProject.githubLink} target="_blank">
                      GitHub
                    </Button>
                  )}
                  <Button href={selectedProject.liveLink} target="_blank">
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default Portfolio;
