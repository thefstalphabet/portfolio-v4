import Connect from "../components/connect";
import ImagesGrid from "../components/images-grid";
import Bio from "../components/bio";
import Job from "../components/job";

export default function Home() {
  return (
    <div className="grid gap-7">
      <Bio />
      <ImagesGrid />
      <Job/>
      <Connect />
    </div>
  );
}
