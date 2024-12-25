import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const ScrollTop = () => {
  // Using framer-motion's useScroll to get the current scroll position
  const { scrollYProgress } = useScroll();

  // State to track the scroll percentage
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // State to determine whether to show the scroll-to-top button
  const [showButton, setShowButton] = useState(false);

  // Circumference of the circle used in the progress indicator
  const circumference = 24 * 2 * Math.PI;

  useEffect(() => {
    // Subscribe to the scrollYProgress change event
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate the scroll percentage
      const percentage = Math.floor(latest * 100);
      setScrollPercentage(percentage);

      // Show the button if the scroll percentage is greater than 12%
      setShowButton(percentage > 12);
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Link to="home" smooth={true} duration={500}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showButton ? 0 : 100, opacity: showButton ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-20 inline-flex cursor-pointer items-center justify-center rounded-full bg-default"
      >
        <svg className="h-14 w-14">
          {/* Define the linear gradient */}
          <defs>
            <linearGradient
              id="scrollGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgb(55, 140, 231)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(0, 105, 200)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle
            className="text-gray-300"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
            r="24"
            cx="28"
            cy="28"
          />
          {/* Progress circle with gradient */}
          <circle
            className="text-primary"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (scrollPercentage / 100) * circumference
            }
            strokeLinecap="round"
            stroke="url(#scrollGradient)"
            fill="transparent"
            r="24"
            cx="28"
            cy="28"
          />
        </svg>
        {/* Scroll-to-top icon */}
        <span className="absolute text-2xl text-primary">
          <FaArrowUpLong />
        </span>
      </motion.div>
    </Link>
  );
};

export default ScrollTop;
