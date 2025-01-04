import { Experience } from "../data/experiences";
import { dateFormat } from "../utils/date-format";
import { Badge } from "./badge";
import { Card } from "./card";

export const Workplace: React.FC<Experience> = ({ company, titles, description, from, to, link, tech }) => {
  return (
    <Card>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {dateFormat(from)} &#8212; <br className="hidden lg:inline-block" />
        {dateFormat(to)}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={link}
              target="_blank"
            >
              {/* Makes the whole element a href */}
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

              <span>
                {titles[0]} · <span>{company}</span>
              </span>
            </a>
          </div>

          {titles.slice(1).map((title, i) => (
            <div key={i} className="text-slate-500">
              {title}
            </div>
          ))}
        </h3>

        <p className="mt-2 text-sm leading-normal">{description}</p>

        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.map((tech, i) => (
            <li key={i}>
              <Badge text={tech} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
