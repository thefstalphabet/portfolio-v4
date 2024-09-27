import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <div>
      <h1 className="font-semibold">Experience</h1>
      <hr className="mt-2 mb-0.5 border-neutral-600" />
      <div className="text-sm">
        <div>
          <div>
            <span className="font-semibold">Software Developer Engineer</span> @{" "}
            <Link to="https://www.tikaj.com/">Tikaj</Link>
          </div>
          <p className="text-xs">Full-time | 03/2022 - 06/2024</p>
          <ul className="pl-2">
            <div className="flex gap-2">
              <p>•</p>
              <li>
                Worked on two SaaS products: UNITYdx, which provides automation
                and monitoring features for the Unity Safety document exchange
                to facilitate the sharing of safety documents, and UNITYai.Lit,
                which facilitates literature management activities.
              </li>
            </div>
            <div className="flex gap-2">
              <p>•</p>
              <li>
                <span className="font-semibold">Responsibilities:</span>{" "}
                Designing and developing user interfaces using React and Figma,
                creating and managing REST APIs in the backend using Nest,
                preparing technical and architectural documents, and managing
                staging, testing, and production deployments.
              </li>
            </div>
            <div className="flex gap-2">
              <p>•</p>
              <li>
                Developed a common reusable components library using Ant Design,
                resulting in an 80% reduction in UI development time across both
                products. Created a reusable export feature for PDF and XML, and
                designed multiple templates using Puppeteer on the backend.
              </li>
            </div>
          </ul>
        </div>
        <div>
          <div>
            <span className="font-semibold">Full Stack Developer</span> @{" "}
            <Link to="https://anumak.com">Anumak & Company</Link>
          </div>
          <p className="text-xs">Internship | 07/2022 - 10/2022</p>
          <ul className="pl-2">
            <div className="flex gap-2">
              <p>•</p>
              <li>Worked on a SaaS product that offers hybrid workspaces.</li>
            </div>
            <div className="flex gap-2">
              <p>•</p>
              <li>
                <span className="font-semibold">Responsibilities:</span>
                Designing and developing user interfaces using Figma and React.
              </li>
            </div>
            <div className="flex gap-2">
              <p>•</p>
              <li>
                Used MUI for pre-build components, and handling data management
                efficiently using Redux.
              </li>
            </div>
          </ul>
        </div>
        {/* <div>
          <div>
            <span className="font-semibold">Contibutor</span> @
            <Link to="">GirlScript Summer of Code</Link>
          </div>
          <p className="text-xs">Part-time | 03/2022 - 06/2024</p>
          <ul className="px-3 ">
            <li>
              - Contributed to Algoders Community repository{" "}
              <span className="italic">(https://rb.gy/93ihed)</span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
