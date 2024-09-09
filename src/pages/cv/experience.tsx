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
              - Developed a reusable components library using Ant Design and
              integrated it with Uniview, leading to a <strong>70%</strong>{" "}
              reduction in development time.
            </li>
            <li>
              - Designed a <strong>reusable</strong> API management class to
              streamline API calls and facilitate error management.
            </li>
            <li>
              - Implemented a reusable export functionality for{" "}
              <strong>PDF</strong> and <strong>XML</strong> formats, along with
              creating custom HTML templates,{" "}
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
            <li>
              - Contributed to a Hybrid Workspace project titled{" "}
              <strong>Offeteria</strong>.
            </li>
            <li>
              - Translated wireframes into React code and implemented Material
              UI with customised product themes.
            </li>
            <li>- Handled data management efficiently using Redux.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
