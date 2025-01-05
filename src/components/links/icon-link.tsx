import { AnchorHTMLAttributes } from "react";

export type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactElement;
};

export const IconLink: React.FC<IconLinkProps> = (props) => {
  return (
    <a {...props} className="transition-colors hover:text-white" href={props.href} target="_blank">
      {props.icon}
    </a>
  );
};
