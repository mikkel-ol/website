import { MobileHeader } from "./mobile-header";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <MobileHeader>About</MobileHeader>

      <p>
        Back in 2009, I sat in my friend's basement, trying relentlessly to jailbreak our iPhones so we could customize them and make them
        our own. Fast forward to today, and I have dived deep into software engineering, having been fortunate enough to work on many great
        projects with brilliant people.
      </p>

      <p>
        My main focus when developing software is to ensure a high level of code quality through solid architecture, thoughtful software
        design, and thorough utilization of frameworks and libraries.
      </p>

      <p>
        When I'm not at the computer, you can usually find me <span className="hover:cursor-boxing">boxing</span>, watching{" "}
        <span className="hover:cursor-formula1">Formula 1</span>, or losing in a game of{" "}
        <span className="hover:cursor-racket">padel tennis</span>.
      </p>
    </div>
  );
};
