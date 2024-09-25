import { Badge } from "./ui/badge";
import reactLogo from "../assets/logos/react.svg";
import supabaseLogo from "../assets/logos/supabase.svg";
import { useEffect } from "react";
import { SiNextdotjs } from "react-icons/si";

export default function Bio() {
  useEffect(() => {}, []);

  return (
    <div className="grid gap-10">
      <header>
        <h1 className="text-2xl font-medium text-heading">
          Hi, I'm Akash Patel
        </h1>
        <h6 className="text-lg text-neutral-500">Software Engineer</h6>
      </header>
      <main>
        <p>
          I am a Software Engineer with a deep passion for developing
          high-quality, full-stack applications.
        </p>
        <p>
          My objective is to deliver exceptional products with a strong focus on
          providing the best possible user experience.
        </p>
        <p className="my-4">
          I specialize in developing web-based applications, with a preference
          for working with my two favourite frameworks:{" "}
          <Badge variant="outline">
            <img className="w-3 mr-2" src={reactLogo} alt="react logo" />
            React
          </Badge>{" "}
          and{" "}
          <Badge variant="outline">
            <SiNextdotjs className="w-3 mr-2" />
            Nest
          </Badge>
          . However, regardless of the choice{" "}
          <Badge variant="outline">
            <img className="w-3 mr-2" src={supabaseLogo} alt="supabase logo" />
            Supabase
          </Badge>{" "}
          remains my preferred solution for the backend.
        </p>
      </main>
    </div>
  );
}
