import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.scss";
import { About } from "./components/about";
import { Contacts } from "./components/contacts";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { Projects } from "./components/projects";
import { Searchlight } from "./components/searchlight";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <>
      <Searchlight />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <section className="col-start-1 lg:sticky top-0 max-h-screen lg:py-24 flex flex-col justify-between">
            <header className="">
              <h1 className="text-4xl md:text-5xl text-slate-200 font-bold">Mikkel O. Laursen</h1>

              <TypeAnimation
                preRenderFirstString
                sequence={[
                  "Senior Software Developer",
                  3000,
                  "Senior Software Engineer",
                  2000,
                  "Senior Software Programmer",
                  1000,
                  "Senior Frontend Developer",
                  4000,
                  "Nerd",
                ]}
                speed={70}
                className="text-xl text-slate-200 font-medium mt-3"
                repeat={0}
              />

              <p className="mt-6 mb-4 lg:mb-16 w-[75%]">
                <span className="italic">DRY, SOLID, KISS</span> — a combination of acronyms that sounds wrong to most people, but makes
                perfect sense to a software developer with a passion for clean code and robust architecture.
              </p>
              <nav className="hidden lg:block">
                <Menu refs={[aboutRef, experienceRef, projectsRef]} />
              </nav>
            </header>

            <footer>
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
      </div>
    </>
  );
};

export default App;
