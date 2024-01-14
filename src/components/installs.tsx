import { CgSoftwareDownload } from "react-icons/cg";
import { installFormat } from "../utils/install-format";

export type InstallProps = {
  value: number;
};

export const Installs: React.FC<InstallProps> = ({ value }) => {
  return (
    <span className="text-sm font-bold text-slate-300 flex items-center gap-2">
      <CgSoftwareDownload className="text-xl" />
      {installFormat(value)} installs
    </span>
  );
};
