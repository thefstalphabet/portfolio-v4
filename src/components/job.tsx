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
        <ul className="list-disc list-inside text pl-2 leading-7">
          <li className="marker:text-neutral-500">
            Created reusable components library using Ant Design, integrated it
            with Uniview, reducing development time by 70%.
          </li>
          <li className="marker:text-neutral-500">
            Created a Reusable API management class for easy making API calls
            and error management.
          </li>
          <li className="marker:text-neutral-500">
            Created Export PDF and XML functionality and developed HTML
            templates <i>(https://rb.gy/uc73gt)</i>.
          </li>
        </ul>
      </main>
    </div>
  );
}
