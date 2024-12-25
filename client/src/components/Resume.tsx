import React, { useState } from "react";
import Modal from "react-modal";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { Element } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { PiGraduationCapLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { IoBarChartOutline } from "react-icons/io5";
import Button from "./Button";
import FilterTags from "./FilterTags";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
  courses,
  education,
  skills as staticSkills,
  experiences as staticExperiences,
} from "../data/data";
import { useExperiences } from "../hooks/experiences/useExperiences";
import { useSkills } from "../hooks/skills/useSkills";

// Define the tags for filtering
const tags = [
  { name: "Experience", icon: HiOutlineBriefcase },
  { name: "Education", icon: PiGraduationCapLight },
  { name: "Skills", icon: IoBarChartOutline },
  { name: "Courses", icon: SlBadge },
];

// Resume component
const Resume: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState("Experience");
  const { experiences } = useExperiences();
  const { skills } = useSkills();

  return (
    <Element name="resume">
      <Section>
        <SectionTitle
          subtitle="3.5+ YEARS OF EXPERIENCE"
          title="My Resume"
          className="text-center"
        />
        <FilterTags
          tags={tags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <div className="mx-auto xl:w-2/3">
          {selectedTag === "Courses" && <ItemList items={courses} />}
          {selectedTag === "Skills" && (
            <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
              {skills?.map((skill: any, index: number) => {
                const matchedSkill = staticSkills.find(
                  (staticSkill) => staticSkill.name === skill.name
                );
                return (
                  <div key={index}>
                    <div className="flex flex-col gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-12">
                      <div className="gradient-transition flex items-center gap-4 rounded-xl bg-default px-6 shadow-default hover:translate-y-0 lg:px-8">
                        <div className="-my-4 flex items-center justify-center rounded-full bg-default">
                          <CircularProgressBar
                            progress={skill.percentage}
                            height={112}
                            width={112}
                          />
                        </div>
                        <div className="flex flex-1 items-center justify-between">
                          <p className="text-base font-medium lg:text-xl">
                            {skill.name}
                          </p>

                          {skill.img ? (
                            <span className="text-primary">
                              <img
                                className="text-3xl lg:text-4xl"
                                src={skill.img}
                              />
                            </span>
                          ) : matchedSkill?.icon ? (
                            <span className="text-primary">
                              {React.createElement(matchedSkill.icon, {
                                className: "text-3xl lg:text-4xl",
                              })}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {selectedTag === "Experience" && <ItemList items={experiences} />}
          {selectedTag === "Education" && <ItemList items={education} />}
        </div>
      </Section>
    </Element>
  );
};

// ItemList component
const ItemList: React.FC<any> = ({ items }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <div
          className="absolute top-0 h-full border-r-4 border-secondary shadow-xl"
          style={{ left: "9px" }}
        ></div>
        <ul className="m-0 list-none p-0">
          {items?.map((item: any, index: number) => (
            <li key={index} className="mb-5">
              <div className="group flex items-center">
                <div className="z-10 h-5 w-5 rounded-full border-4 border-secondary bg-default shadow-xl transition-all duration-300 ease-in group-hover:bg-primary">
                  <div className="ml-4 mt-1 h-1 w-6 items-center bg-secondary shadow-xl"></div>
                </div>
                <div className="z-10 ml-4 flex-1">
                  <div className="shadow-only gradient-transition rounded-lg bg-default px-6 py-8 shadow-default hover:translate-y-0">
                    <h3
                      className={`text-xl font-semibold text-default lg:text-2xl font-raleway`}
                    >
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="my-2 text-sm leading-relaxed text-secondary lg:text-base">
                        {item.description}
                      </p>
                    )}
                    <div className="my-2 flex items-center gap-4 text-default">
                      {(item.img ||
                        staticExperiences.find(
                          (staticExperience) =>
                            staticExperience.title === item.title
                        )?.img) && (
                        <img
                          src={
                            item.img ||
                            staticExperiences.find(
                              (staticExperience) =>
                                staticExperience.title === item.title
                            )?.img
                          }
                          alt={item.title}
                          className="my-3 w-8 rounded-lg"
                        />
                      )}
                      <p className="flex flex-col gap-1 text-sm md:flex-row md:gap-2 lg:text-base">
                        <span className="font-semibold tracking-wider text-primary">
                          {item.provider}
                        </span>
                        <span>({item.duration})</span>
                      </p>
                    </div>
                    {item.certificate && (
                      <Button onClick={() => openModal(item.certificate)}>
                        View Certificate
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CertificateModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedCertificate={selectedCertificate}
      />
    </>
  );
};

// CertificateModal component
const CertificateModal: React.FC<any> = ({
  modalIsOpen,
  closeModal,
  selectedCertificate,
}) => {
  return (
    <AnimatePresence>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Details"
          className="z-50 mx-5 md:mx-auto md:w-2/3 lg:w-1/2"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl bg-default p-6 shadow-default"
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-default p-2 text-2xl text-primary shadow-default transition-transform duration-300 will-change-transform hover:scale-90 lg:text-3xl"
            >
              <RxCross2 />
            </button>
            {selectedCertificate && (
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="mt-10 rounded-lg lg:mt-12"
              />
            )}
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

// CircularProgressBar component
const CircularProgressBar: React.FC<any> = ({ progress, height, width }) => {
  // Subtract 10 to account for stroke width
  const radius = Math.min(height, width) / 2 - 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ height, width }}>
      <svg className="h-full w-full" width={width} height={height}>
        {/* Define the linear gradient */}
        <defs>
          <linearGradient
            id="primaryGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgb(55, 140, 231)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(0, 105, 200)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          className="text-gray-300"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={height / 2}
        />

        {/* Foreground circle with gradient */}
        <circle
          className="circle"
          strokeWidth="8"
          stroke="url(#primaryGradient)"
          fill="transparent"
          strokeLinecap="round"
          r={radius}
          cx={width / 2}
          cy={height / 2}
          style={{ strokeDashoffset: offset, strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-primary lg:text-2xl">
        {progress}%
      </div>
    </div>
  );
};

export default Resume;
