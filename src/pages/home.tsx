import { Badge } from "../components/ui/badge";
import Connect from "../components/ui/connect";

export default function Home() {
  return (
    <div className="grid gap-10">
      <header>
        <h1 className="text-2xl font-medium text-heading">
          Hi, i'm Akash Patel
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
          and
          <Badge variant="outline">vue</Badge>. But no matter what,{" "}
          <Badge variant="outline">supabase</Badge> is always my go-to for the
          backend.
        </p>

        <div className="columns-3 gap-4 space-y-4 my-12">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1725133306731-fd82b613300f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="rounded-md"
            src="https://plus.unsplash.com/premium_photo-1692897216266-59b791d59129?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1725511925250-bf38d6abba5d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1725133306731-fd82b613300f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1725133306731-fd82b613300f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="rounded-md"
            src="https://plus.unsplash.com/premium_photo-1692897216266-59b791d59129?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </main>
      <footer>
        <Connect/>
      </footer>
    </div>
  );
}
