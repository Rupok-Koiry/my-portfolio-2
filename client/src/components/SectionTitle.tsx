type SectionTitleProps = {
  subtitle: string;
  title: string;
  className: string;
};

const SectionTitle = ({ subtitle, title, className }: SectionTitleProps) => {
  return (
    <section className={`mb-10 lg:mb-12 ${className}`}>
      <h3
        className={`text-sm font-bold tracking-wider text-primary lg:text-base font-raleway`}
      >
        {subtitle}
      </h3>
      <h2
        className={`mt-3 text-4xl font-bold lg:text-5xl xl:mt-4 xl:text-6xl font-raleway`}
      >
        {title}
      </h2>
    </section>
  );
};

export default SectionTitle;
