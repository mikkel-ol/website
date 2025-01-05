import imgPlaceholder from "../assets/img-placeholder.webp";
import { projects_highlight } from "../data/projects";
import { Badge } from "./badge";
import { Card } from "./card";
import { Installs } from "./installs";
import { AnimatedLink } from "./links/animated-link";
import { MobileHeader } from "./mobile-header";

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <MobileHeader>Projects</MobileHeader>

      <ol className="group/list flex flex-col gap-16">
        {projects_highlight.map(({ description, link, name, tech, img, installs }, i) => (
          <li key={i}>
            <div className="transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Card>
                <img
                  className="order-3 sm:order-1 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
                  src={img ?? imgPlaceholder}
                  width={200}
                  height={48}
                ></img>

                <div className="z-10 sm:col-span-6 order-2 flex flex-col gap-3">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={link}
                        target="_blank"
                      >
                        {/* Makes the whole element a href */}
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                        <span>{name}</span>
                      </a>
                    </div>
                  </h3>

                  <p className="text-sm leading-normal">{description}</p>

                  {installs && <Installs value={installs} />}

                  <ul className="flex flex-wrap gap-2">
                    {tech.map((tech, i) => (
                      <li key={i}>
                        <Badge text={tech} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </li>
        ))}
      </ol>

      <AnimatedLink href="/projects">View all projects</AnimatedLink>
    </div>
  );
};
