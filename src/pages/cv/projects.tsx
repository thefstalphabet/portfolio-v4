import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div>
      <h4 className="font-bold">Projects</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />{" "}
      <div className="text-sm">
        <div>
          <h5 className="font-bold">
            Lunch Box |{" "}
            <Link
              to="https://tiffin-box.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </h5>
          <p className="text-neutral-600">Js, React, Node, AntD, Nest</p>
          <ul className="px-3 text-neutral-600">
            <li>- A subscription-based web app for tiffin service.</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">
            Chat Freely |{" "}
            <Link
              to="https://github.com/thefstalphabet/chat-freely-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </h5>
          <p className="text-neutral-600">
            Js, React, Node, Express, Socket.io, Chakra UI
          </p>
          <ul className="px-3 text-neutral-600">
            <li>
              - A MERN app for chatting with JWT Auth, single/group chat
              features, notifications, and typing indicators.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">
            Moviepedia |{" "}
            <Link
              to="https://github.com/thefstalphabet/moviepedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </h5>
          <p className="text-neutral-600">Js, React, Node, Express</p>
          <ul className="px-3 text-neutral-600">
            <li>- A MERN app for searching movies, with JWT Auth.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
