import { Link } from "./links/link";
import { MobileHeader } from "./mobile-header";
import { Mozaic } from "./mozaic";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <MobileHeader>About</MobileHeader>

      <p>
        Back in 2009, I was in my friend's basement, obsessively trying to jailbreak our iPhones to push the boundaries of what was
        possible. That curiosity and determination have since evolved into a career in software engineering, driven by a fascination with
        technology's ability to shape and improve experiences.
      </p>

      <p>
        I specialize in creating maintainable and scalable solutions through clean architecture, thoughtful software design, and intuitive
        interfaces. My goal is to write code that not only solves problems but also stands the test of time.
      </p>

      <p>
        Currently, I'm a developer at{" "}
        <Link href="https://bankdata.dk" style="bright">
          Bankdata
        </Link>
        , specializing in micro-frontends. I contribute to the development of <Mozaic />, a platform that empowers 30+ teams to
        independently deliver their slice of the online banking experience.
      </p>

      <p>
        When I step away from the keyboard, you'll likely find me boxing, sim racing, spending time with my girlfriend, or watching
        sourdough rise.
      </p>
    </div>
  );
};
