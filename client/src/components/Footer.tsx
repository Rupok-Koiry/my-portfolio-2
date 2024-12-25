import { Link } from "react-router-dom";
import FindMe from "./FindMe";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-center gap-4 px-5 py-12 lg:gap-6">
      <div className="logo flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-2xl shadow-default">
        <Link to="/" className={`font-[500] text-primary font-pacifico`}>
          RK
        </Link>
      </div>
      <FindMe className="text-center" />
      <p className="text-base text-secondary lg:text-lg">
        © 2024 All Rights Reserved by{" "}
        <span className="text-primary">Rupok Koiry</span>
      </p>
    </footer>
  );
};

export default Footer;
