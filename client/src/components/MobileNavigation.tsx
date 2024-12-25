import { motion } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type MenuItemProps = {
  label: string;
  href: string;
  icon: React.JSX.Element;
  type?: string;
  toggle?: () => void;
};

const MenuItem = ({ label, href, icon, type, toggle }: MenuItemProps) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group"
    >
      {type === "button" ? (
        <Button href={href}>Hire Me</Button>
      ) : (
        <ScrollLink
          to={href}
          smooth={true}
          duration={300}
          className="flex cursor-pointer items-center transition-all group-hover:text-primary"
          onClick={toggle}
          activeClass="scale-110 text-primary"
          spy={true}
          hashSpy={true}
          offset={-80}
          isDynamic={true}
        >
          <span className="me-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-xl font-medium transition-all group-hover:text-primary">
            {icon}
          </span>
          {label}
        </ScrollLink>
      )}
    </motion.li>
  );
};

type MobileNavigationProps = {
  menu: MenuItemProps[];
  toggle?: () => void;
};

const MobileNavigation = ({ menu, toggle }: MobileNavigationProps) => {
  return (
    <motion.ul
      variants={listVariants}
      className="absolute top-28 flex w-full flex-col gap-5 px-8"
    >
      <motion.li variants={itemVariants} className="flex justify-center">
        <ThemeToggler />
      </motion.li>
      {menu.map((link, i) => (
        <MenuItem
          label={link.label}
          href={link.href}
          icon={link.icon}
          type={link.type}
          toggle={toggle}
          key={i}
        />
      ))}
    </motion.ul>
  );
};

export default MobileNavigation;
