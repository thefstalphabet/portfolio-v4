import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Job() {
  return (
    <div className="grid gap-6">
      <header>
        <Link
          to="https://www.tikaj.com/"
          target="_blank"
          className="text-2xl font-medium text-heading flex items-center gap-1"
        >
          Tikaj
          <HiMiniArrowUpRight />
        </Link>
        <h6 className="text-lg text-neutral-500">
          Software Developer Engineer - 1
        </h6>
        <p className="text-sm text-neutral-500">March-2022 - June-2024</p>
      </header>
      <main>
        <ul className="list-disc list-outside text pl-5 leading-7">
          <li className="marker:text-neutral-500">
            Worked on two SaaS products: UNITYdx, which provides automation and
            monitoring features for the Unity Safety document exchange to
            facilitate the sharing of safety documents, and UNITYai.Lit, which
            facilitates literature management activities.
          </li>
          <li className="marker:text-neutral-500">
            <span className="font-semibold">Responsibilities:</span> Designing
            and developing user interfaces using React and Figma, creating and
            managing REST APIs in the backend using Nest, preparing technical
            and architectural documents, and managing staging, testing, and
            production deployments.
          </li>
          <li className="marker:text-neutral-500">
            Developed a common reusable components library using Ant Design,
            resulting in an 80% reduction in UI development time across both
            products.
          </li>
        </ul>
      </main>
    </div>
  );
}
