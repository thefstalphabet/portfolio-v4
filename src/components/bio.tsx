import { Badge } from "./ui/badge";
import reactLogo from "../assets/logos/react.svg";
import vueLogo from "../assets/logos/vue.svg";
import supabaseLogo from "../assets/logos/supabase.svg";

export default function Bio() {
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
          I'm a Software Enginer with a passion for building high-quality, full
          stack applications.
        </p>
        <p>
          My goal is to deliver exceptional products with the best user
          experience in mind.
        </p>
        <p className="my-4">
          I specialize in building web based applications, usually having to
          pick between my two favorites:{" "}
          <Badge variant="outline">
            <img className="w-3 mr-2" src={reactLogo} alt="react logo" />
            React
          </Badge>{" "}
          and{" "}
          <Badge variant="outline">
            <img className="w-3 mr-2" src={vueLogo} alt="vue logo" />
            Vue
          </Badge>
          . But no matter what,{" "}
          <Badge variant="outline">
            <img className="w-3 mr-2" src={supabaseLogo} alt="supabase logo" />
            Supabase
          </Badge>{" "}
          is always my go-to for the backend.
        </p>
      </main>
    </div>
  );
}
