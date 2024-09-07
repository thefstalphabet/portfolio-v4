import Connect from "../components/connect";
import ImagesGrid from "../components/images-grid";
import Bio from "../components/bio";
import Job from "../components/job";

export default function Home() {
  return (
    <div className="grid gap-7">
      <Bio />
      <ImagesGrid />
      <Job />
      <Connect />
      <footer className="grid gap-3 mt-4">
        <p className="text-xs text-neutral-500">Portfolio heavily inspired by leerob's one.</p>
        <img
          className="w-10 scale-x-[-1]"
          src="https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x.webp"
        />
      </footer>
    </div>
  );
}
