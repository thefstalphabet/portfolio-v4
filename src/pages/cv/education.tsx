export default function Education() {
  return (
    <div>
      <h4 className="font-bold">Education</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />
      <div className="text-sm">
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">
              Takshshila Institute of Engineering & Technology
            </h5>
            <div className="text-xs">
              <p>Computer Science Bachelors</p>
              <p className="italic ">GPA: 7.61</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <p>07/2018 - 06/2022</p>
            <p>Jabalpur, MP</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">
              MKD Public Higher Secondary School
            </h5>
            <div className="text-xs">
              <p>12th M.P Board</p>
              <p className="italic ">Percentage: 60%</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <p>07/2017 - 04/2018</p>
            <p>Narsinghpur, MP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
