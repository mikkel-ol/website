import { ComponentProps, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.scss";
import { About } from "./components/about";
import { Contacts } from "./components/contacts";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { FunModeHeader } from "./components/fun-mode-header";
import { Menu } from "./components/menu";
import { Projects } from "./components/projects";
import { Searchlight } from "./components/searchlight";

type Sequence = ComponentProps<typeof TypeAnimation>["sequence"];

const App: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const roles: Sequence = ["Software Developer", 3000, "Micro-frontend Engineer", 2000, "Consultant", 2000, "Nerd"];

  return (
    <>
      <Searchlight />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section className="col-start-1 lg:sticky top-0 max-h-screen lg:py-24 flex flex-col justify-between">
          <header>
            <FunModeHeader text="Mikkel O. Laursen" />

            <TypeAnimation
              preRenderFirstString
              sequence={roles}
              speed={70}
              className="text-xl text-slate-200 font-medium mt-3"
              repeat={0}
            />

            <p className="mt-6 mb-4 lg:mb-16 max-w-sm">
              <span className="italic">DRY, SOLID, KISS</span> — a combination of acronyms that sounds wrong to most people, but makes
              perfect sense to a software developer with a passion for clean code and robust architecture.
            </p>
            <nav className="hidden lg:block">
              <Menu refs={[aboutRef, experienceRef, projectsRef]} />
            </nav>
          </header>

          <footer className="mt-8">
            <Contacts />
          </footer>
        </section>

        <main className="lg:col-start-2 flex flex-col gap-24 py-24">
          <section id="about" ref={aboutRef} className="scroll-m-24">
            <About />
          </section>

          <section id="experience" ref={experienceRef} className="scroll-m-24">
            <Experience />
          </section>

          <section id="projects" ref={projectsRef} className="scroll-m-24">
            <Projects />
          </section>

          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;
