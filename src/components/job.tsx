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
            Developed a reusable components library using Ant Design and
            integrated it with Uniview, leading to a 70% reduction in
            development time.
          </li>
          <li className="marker:text-neutral-500">
            Designed a reusable API management class to streamline API calls and
            facilitate error management.
          </li>
          <li className="marker:text-neutral-500">
            Implemented a reusable export functionality for PDF and XML formats, along with
            creating custom HTML templates,{" "}
            (https://rb.gy/uc73gt).
          </li>
        </ul>
      </main>
    </div>
  );
}
