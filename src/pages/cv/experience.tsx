export default function Experience() {
  return (
    <div>
      <h4 className="font-bold">Experience</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />{" "}
      <div className="text-sm">
        <div>
          <div className="flex justify-between">
            <h5 className="font-semibold">
              TIAKJ | Software Developer Engineer - 1
            </h5>
            <p className="text-xs">Remote | March 2022 - June 2024</p>
          </div>
          <ul className="px-3 ">
            <li>
              - Created reusable components library using Ant Design, integrated
              it with Uniview, reducing development time by <strong>70%</strong>
              .
            </li>
            <li>
              - Created a <strong>Reusable</strong> API management class for
              easy API calls and error handling.
            </li>
            <li>
              - Created export functionality for <strong>PDF</strong> and{" "}
              <strong>XML</strong> formats and developed HTML templates{" "}
              <span className="italic">(https://rb.gy/uc73gt)</span>.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <h5 className="font-semibold">
              GirlScript Summer of Code | Contributor
            </h5>
            <p className="text-xs">Remote | March 2022 - May 2022</p>
          </div>
          <ul className="px-3 ">
            <li>
              - Contributed to Algoders Community repository{" "}
              <span className="italic">(https://rb.gy/93ihed)</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <h5 className="font-semibold">
              aNumak & Company | Full Stack Developer
            </h5>
            <p className="text-xs">Remote | July 2021 - October 2021</p>
          </div>
          <ul className="px-3">
            <li>- Worked on a Hybrid Workspace project called Offeteria.</li>
            <li>
              - Developed wireframes into React code and utilized Material UI
              with product themes.
            </li>
            <li>- Managed data using Redux.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
