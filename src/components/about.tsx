import { MobileHeader } from "./mobile-header";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <MobileHeader>About</MobileHeader>

      <p>
        Back in 2009 I sat in my friend's basement trying relentlessly to jailbreak our iPhones so we could customize and make them our own.
        Fast forward to today and I've dived deep into software engineering, having been fortunate enough to work with many great companies
        and brilliant people.
      </p>

      <p>
        My main focus when developing software is ensuring a high level of code quality through solid architecture, thoughtful software
        design, and thorough utilization of frameworks and libraries.
      </p>

      <p>When I'm not at the computer you can usually find me watching dough rise, watching formula 1 or losing in a game of padel.</p>
    </div>
  );
};
