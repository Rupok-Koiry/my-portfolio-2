import { ButtonHTMLAttributes } from "react";
import { Link as RouterLink } from "react-router-dom"; // Importing Link from react-router-dom

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  target?: string;
  download?: boolean;
};

const Button = ({
  children,
  href,
  className,
  target = "_blank",
  ...rest
}: ButtonProps) => {
  const defaultClassName = `text-center block gradient-transition rounded-md bg-default lg:text-base text-sm px-4 py-2 lg:px-6 lg:py-3 text-primary shadow-default ${className}  border-2 border-primary font-medium outline-none`;

  // If there's an `href`, use `react-router-dom`'s Link or an <a> tag
  if (href)
    return (
      <RouterLink to={href} className={defaultClassName} target={target}>
        {children}
      </RouterLink>
    );

  return (
    <button className={defaultClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
