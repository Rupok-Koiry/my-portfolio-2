import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import { features } from "../data/data";

const Features = () => {
  return (
    <Element name="features">
      <Section>
        <SectionTitle
          subtitle="FEATURES"
          title="What I Offer"
          className="text-center"
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`gradient-transition backface group relative rounded-xl bg-default p-6 text-center shadow-default lg:px-6 lg:py-8`}
            >
              <div className="flex justify-center">
                <feature.icon className="text-6xl text-primary lg:text-8xl" />
              </div>
              <h3
                className={`my-3 text-2xl font-semibold transition-colors duration-300 ease-in group-hover:text-primary lg:my-4 lg:text-3xl font-raleway`}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary md:text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Element>
  );
};

export default Features;
