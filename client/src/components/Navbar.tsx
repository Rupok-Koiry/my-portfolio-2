import { useEffect, useRef, useState } from "react";
import { useCycle, motion, useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
import ThemeToggler from "./ThemeToggler";
import MobileNavigation from "./MobileNavigation";
import {
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { PiReadCvLogo } from "react-icons/pi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import MenuToggle from "./MenuToggle";
import { useDimensions } from "../hooks/useDimensions";
import { Link, useLocation } from "react-router-dom";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 14.68%) 44px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(24px at calc(100% - 14.68%) 44px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menu = [
  { label: "Home", href: "home", icon: <HiOutlineHome /> },
  { label: "Features", href: "features", icon: <HiOutlineViewGrid /> },
  { label: "Portfolio", href: "portfolio", icon: <HiOutlineFolderOpen /> },
  { label: "Resume", href: "resume", icon: <PiReadCvLogo /> },
  { label: "Contact", href: "contact", icon: <HiOutlinePhone /> },
  {
    label: "Hire Me",
    href: "https://www.fiverr.com/rupok_09",
    type: "button",
    icon: <MdOutlineWorkspacePremium />,
  },
];

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  /* const [showNavbar, setShowNavbar] = useState(true);
  <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`fixed top-0 w-full py-3 ${hasShadow ? "shadow-default" : ""} navbar z-20`}
    > 
  </motion.header> */
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const scrollPercentage = Math.floor(latest * 100);
      setHasShadow(scrollPercentage > 0);
      /* if (scrollPercentage > 0) {
        setShowNavbar(true);
      } else if (scrollPercentage === 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      } */
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  console.log(location.pathname === "/");

  return (
    <header
      className={`${
        location.pathname === "/" ? "fixed top-0" : ""
      } w-full py-3 ${
        hasShadow ? "shadow-default" : ""
      } navbar z-20 transition-shadow`}
    >
      <div className="mx-auto flex items-center justify-between px-5 md:container">
        <div className="logo flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-2xl shadow-default">
          <Link to="/" className={`font-[500] text-primary font-pacifico`}>
            RK
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {menu.map((link, index) => (
              <li key={index}>
                {link.type === "button" ? (
                  <Button href={link.href}>Hire Me</Button>
                ) : (
                  <ScrollLink
                    to={link.href}
                    smooth={true}
                    activeClass="active"
                    duration={300}
                    className="animation-link cursor-pointer"
                    spy={true}
                    hashSpy={true}
                    offset={-50}
                    isDynamic={true}
                  >
                    {link.label}
                  </ScrollLink>
                )}
              </li>
            ))}
            <li>
              <ThemeToggler />
            </li>
          </ul>
        </nav>
        <motion.nav
          className="mobile block md:hidden"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="absolute bottom-0 right-0 top-0 h-screen w-full max-w-[300px] rounded-bl-2xl rounded-tl-2xl bg-default shadow-lg"
            variants={sidebar}
          >
            <div className="relative">
              <MobileNavigation menu={menu} toggle={() => toggleOpen()} />
            </div>
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
