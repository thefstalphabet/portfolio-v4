import Connect from "../components/connect";
import ImagesGrid from "../components/images-grid";
import Bio from "../components/bio";

export default function Home() {
  return (
    <div className="grid gap-7">
      <Bio />
      <ImagesGrid />
      <Connect />
    </div>
  );
}
