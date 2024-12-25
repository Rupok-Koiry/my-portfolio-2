import { FiFacebook, FiLinkedin } from "react-icons/fi";
type FineMeProps = {
  className?: string;
};
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const FindMe = ({ className = "" }: FineMeProps) => {
  return (
    <div className={`${className} font-raleway`}>
      <h3 className="mb-2 text-sm font-semibold tracking-wider text-primary lg:text-base">
        FIND ME
      </h3>
      <div className="flex items-center gap-2 lg:gap-4">
        <Link
          target="_blank"
          to="https://www.facebook.com/rupok.koiry"
          className="gradient-transition flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary bg-default p-2 text-2xl shadow-default lg:h-14 lg:w-14 xl:h-16 xl:w-16 xl:p-3 xl:text-3xl"
        >
          <FiFacebook />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/Rupok-Koiry"
          className="gradient-transition flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary bg-default p-2 text-2xl shadow-default lg:h-14 lg:w-14 xl:h-16 xl:w-16 xl:p-3 xl:text-3xl"
        >
          <AiFillGithub />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/rupok-koiry"
          className="gradient-transition flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary bg-default p-2 text-2xl shadow-default lg:h-14 lg:w-14 xl:h-16 xl:w-16 xl:p-3 xl:text-3xl"
        >
          <FiLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default FindMe;
