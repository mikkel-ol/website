import { PropsWithChildren, TdHTMLAttributes } from "react";
import { Badge } from "../components/badge";
import { projects } from "../data/projects";
import { AnimatedLink } from "../components/links/animated-link";

const Cell: React.FC<PropsWithChildren<TdHTMLAttributes<unknown>>> = (props) => {
  return (
    <td {...props} className={"py-4 pr-4" + " " + props.className}>
      {props.children}
    </td>
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="lg:py-24">
      <table className="table-fixed w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-slate-800">
            <th className="w-24 py-4">Type</th>
            <th className="w-38 py-4">Project</th>
            <th className="py-4">Description</th>
            <th className="py-4">Technologies</th>
            <th className="w-24 *:py-4">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <tr key={i} className="border-b border-slate-800">
              <Cell></Cell>

              <Cell className="text-slate-200 font-semibold">{project.name}</Cell>

              <Cell className="text-ellipsis ">{/* {project.description} */}</Cell>

              <Cell className="flex gap-x-1 gap-y-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <Badge key={i} text={tech} />
                ))}
              </Cell>

              {/* <Cell>{project.link && <AnimatedLink href={project.link}>{project.link}</AnimatedLink>}</Cell> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
