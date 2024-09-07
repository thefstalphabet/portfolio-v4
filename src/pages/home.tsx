import { Badge } from "../components/ui/badge";
import Connect from "../components/ui/connect";
import { SkeletonCard } from "../components/ui/skeleton-card";
import mirrorSelfie from "../assets/mirror-selfie.jpg";
import afterWorkoutSelfie from "../assets/after-workout-selfie.jpg";

export default function Home() {
  return (
    <div className="grid gap-10">
      <header>
        <h1 className="text-2xl font-medium text-heading">
          hi, i'm akash patel
        </h1>
        <h6 className="text-lg text-zinc-400">Software Engineer</h6>
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
        <p className="my-3">
          I specialize in building web based applications, usually having to
          pick between my two favorites: <Badge variant="outline">react</Badge>{" "}
          and <Badge variant="outline">vue</Badge>. But no matter what,{" "}
          <Badge variant="outline">supabase</Badge> is always my go-to for the
          backend.
        </p>

        <div className="columns-3 gap-4 space-y-4 my-12">
          <SkeletonCard />
          <img
            className="rounded-md object-cover h-full w-full"
            src={mirrorSelfie}
          />
          <img
            className="rounded-md object-cover h-full w-full"
            src={afterWorkoutSelfie}
          />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard/>
        </div>
      </main>
      <footer>
        <Connect />
      </footer>
    </div>
  );
}
