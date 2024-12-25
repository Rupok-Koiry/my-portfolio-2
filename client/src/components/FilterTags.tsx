import React from "react";

type FilterTagsProps = {
  tags: { name: string; icon: React.ElementType }[];
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
};

const FilterTags = ({ tags, selectedTag, setSelectedTag }: FilterTagsProps) => {
  return (
    <nav className="mb-10 flex justify-center lg:mb-12">
      <ul className="flex flex-col items-center gap-4 rounded-none bg-transparent shadow-none md:flex-row md:rounded-full md:bg-default md:shadow-default">
        {tags.map((tag) => (
          <li
            key={tag.name}
            className={`${tag.name === selectedTag ? "selected" : ""} w-full`}
            onClick={() => setSelectedTag(tag.name)}
          >
            <button
              className={`rounded-full px-8 py-4 capitalize lg:text-lg ${tag.name === selectedTag ? "bg-primary-gradient text-white" : "hover:bg-secondary"} flex w-full items-center justify-center gap-2 shadow-default transition-all duration-300 ease-in md:shadow-none`}
              type="button"
            >
              <tag.icon className="text-2xl" />
              {tag.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FilterTags;
