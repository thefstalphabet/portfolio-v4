import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div>
      <h4 className="font-bold">Projects</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />{" "}
      <div className="text-sm">
        <div>
          <div className="flex gap-1">
            <h5 className="font-semibold">Lunch Box | </h5>
            <Link
              to="https://tiffin-box.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Url
            </Link>
          </div>
          <ul className="px-2">
            <div className="flex gap-2">
              <p>•</p>
              <li>
                Creating a SaaS product that offers working professionals and
                students an easy way to manage their daily meals.
              </li>
            </div>
            <div className="flex gap-2">
              <p>•</p>
              <li>
                Used React and Ant design for developing user interfaces, Nest
                and Mongodb for developing backend and REST APIs.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
