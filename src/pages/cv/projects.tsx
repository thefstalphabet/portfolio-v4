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
          <ul className="px-3 ">
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
                Used react and ant design for developing user interfaces, nest
                and mongodb for developing backend and rest APIs
              </li>
            </div>
          </ul>
        </div>
        {/* <div>
          <h5 className="font-semibold">
            Chat Freely |{" "}
            <Link
              to="https://github.com/thefstalphabet/chat-freely-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </h5>
          <p>Js, React, Node, Express, Socket.io, Chakra UI</p>
          <ul className="px-3 ">
            <div className="flex gap-2">
              <p>•</p>
              <li>
                A MERN app for chatting with JWT Auth, single/group chat
                features, notifications, and typing indicators.
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">
            Moviepedia |{" "}
            <Link
              to="https://github.com/thefstalphabet/moviepedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </h5>
          <p>Js, React, Node, Express</p>
          <ul className="px-3 ">
            <div className="flex gap-2">
              <p>•</p>
              <li>A MERN app for searching movies, with JWT Auth.</li>
            </div>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
