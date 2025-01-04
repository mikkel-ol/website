export const Mozaic: React.FC = () => {
  return (
    <span className="group/mozaic inline-flex font-medium text-slate-200 relative">
      <span className="sr-only">Mozaic</span>

      {/* <img
        src="img/mozaic.png"
        className="opacity-0 group-hover/mozaic:opacity-100 absolute top-0 group-hover/mozaic:-top-2 left-1/4 group-hover/mozaic:left-2 transform -translate-x-1/2 -translate-y-1/2 group-hover/mozaic:-rotate-12 h-5 transition-all"
      ></img> */}

      <span className="group-hover/mozaic:text-[#00e086]" aria-hidden="true">
        M
      </span>
      <span className="group-hover/mozaic:text-[#00dac6]" aria-hidden="true">
        o
      </span>
      <span className="group-hover/mozaic:text-[#00d5ff]" aria-hidden="true">
        z
      </span>
      <span className="group-hover/mozaic:text-[#b08dff]" aria-hidden="true">
        a
      </span>
      <span className="group-hover/mozaic:text-[#d194ff]" aria-hidden="true">
        i
      </span>
      <span className="group-hover/mozaic:text-[#eb99ff]" aria-hidden="true">
        c
      </span>
    </span>
  );
};
