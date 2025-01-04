import { experiences } from "../data/experiences";
import { AnimatedLink } from "./links/animated-link";
import { MobileHeader } from "./mobile-header";
import { Workplace } from "./workplace";

export const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <MobileHeader>Experience</MobileHeader>

      <ol className="group/list flex flex-col gap-16">
        {experiences.map((experience, i) => (
          <li key={i}>
            <div className="transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Workplace {...experience} />
            </div>
          </li>
        ))}
      </ol>

      <AnimatedLink href="/resume.pdf" external>
        View full résumé
      </AnimatedLink>
    </div>
  );
};
