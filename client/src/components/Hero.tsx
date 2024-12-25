import { Element } from "react-scroll";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import reactjsImg from "/images/reactjs.png";
import nextjsDarkImg from "/images/nextjs-dark.png";
import nodejsImg from "/images/nodejs.png";
import heroImg from "/images/rupok-2.png";
import FindMe from "./FindMe";

const Hero = () => {
  return (
    <Element name="home">
      <section className="grid min-h-screen grid-cols-12 items-center justify-center gap-6 border-b-2 border-[#cbcbcb] pb-12 pt-24 dark:border-[#0e0e0e] lg:pb-16 xl:gap-8 xl:pb-20 2xl:gap-12">
        <div className="order-2 col-span-12 md:order-1 md:col-span-6 lg:col-span-7">
          <h3
            className={`text-sm font-bold tracking-wider text-primary lg:text-base font-raleway`}
          >
            WELCOME TO MY WORLD
          </h3>
          <h2
            className={`my-4 text-3xl font-bold md:text-4xl lg:my-6 lg:text-5xl xl:text-6xl font-raleway`}
          >
            Hi, I&apos;m <span className="text-primary">Rupok Koiry</span>
            <br /> a Full-Stack Developer.
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-secondary md:text-base lg:mb-6 lg:text-lg">
            I am a dedicated and experienced web developer with nearly four
            years of hands-on coding expertise. Whether you need a business
            website, blog, e-commerce platform, agency site, directory listing,
            real estate portal, or any other type of business website, I am here
            to transform your vision into reality. Let’s create something
            exceptional together.
          </p>
          <div className="flex">
            <Button
              className="flex items-center justify-center gap-3"
              href={"/images/rupok-koiry-resume.pdf"}
              download
            >
              Download Resume
              <FaArrowRightLong />
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-between gap-3 max-[400px]:flex-col max-[400px]:items-start lg:mt-10 xl:mt-12">
            <FindMe />
            <div>
              <h3
                className={`mb-2 text-sm font-semibold tracking-wider text-primary lg:text-base font-raleway`}
              >
                BEST SKILL ON
              </h3>
              <div className="flex items-center gap-3 lg:gap-4">
                <span className="gradient-transition h-12 w-12 rounded-md border-2 border-primary bg-default p-2 shadow-default hover:translate-x-0 lg:h-14 lg:w-14 xl:h-16 xl:w-16 xl:p-3">
                  <img
                    src={nextjsDarkImg}
                    alt="Next.js"
                    className="invert-0 dark:invert"
                  />
                </span>
                <span className="gradient-transition h-12 w-12 rounded-md border-2 border-primary bg-default p-2 shadow-default hover:translate-x-0 lg:h-14 lg:w-14 xl:h-16 xl:w-16 xl:p-3">
                  <img src={reactjsImg} alt="React.js" width={64} height={64} />
                </span>
                <span className="gradient-transition h-12 w-12 rounded-md border-2 border-primary bg-default p-2 shadow-default hover:translate-x-0 lg:h-14 lg:w-14 xl:h-16 xl:w-16 xl:p-3">
                  <img src={nodejsImg} alt="Node.js" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 col-span-12 p-3 md:order-2 md:col-span-6 lg:col-span-5">
          <img
            src={heroImg}
            alt="hero"
            className="img-shadow mx-auto w-2/3 rounded-3xl object-cover md:mt-0 md:w-full xl:w-2/3"
          />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
