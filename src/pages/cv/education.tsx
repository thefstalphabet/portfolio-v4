export default function Education() {
  return (
    <div>
      <h4 className="font-bold">Education</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />
      <div className="text-sm">
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">
              Rajiv Gandhi Prodyogiki Vishwavidyalaya
            </h5>
            <div className="text-xs">
              <p>B-Tech Computer Science Engineering</p>
              <p>CGPA: 7.61</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <p>2018 - 2022</p>
            <p>Bhopal, MP</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">
              MKD Public Higher Secondary School
            </h5>
            <div className="text-xs">
              <p>12th M.P Board</p>
              {/* <p className="italic ">Percentage: 60%</p> */}
            </div>
          </div>
          <div className="text-right text-xs">
            <p>2017 - 2018</p>
            <p>Narsinghpur, MP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
