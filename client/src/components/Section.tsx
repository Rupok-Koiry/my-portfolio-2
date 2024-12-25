import React from "react";
type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={`border-b-2 border-secondary py-12 lg:py-16 xl:py-20 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
