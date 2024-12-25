import Hero from "../components/Hero";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import ScrollTop from "../components/ScrollTop";
import Blogs from "../components/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Blogs />
      <Contact />
      <ScrollTop />
    </>
  );
}
