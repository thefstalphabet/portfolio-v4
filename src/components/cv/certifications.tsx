import { Link } from "react-router-dom";
export default function Certifications() {
  return (
    <div>
      <h4 className="font-bold">Certifications</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />
      <div className="text-sm">
        <div className="flex gap-1">
          <p>Problem Solving (Basic) from Hackerrank -</p>
          <Link
            to="https://www.hackerrank.com/certificates/fc8b1ac4f193"
            target="_blank"
            rel="noopener noreferrer"
          >
            view
          </Link>
        </div>
        <div className="flex gap-1">
          <p>CSS (Basic) from Hackerrank -</p>
          <Link
            to="https://www.hackerrank.com/certificates/eea5fcf29741"
            target="_blank"
            rel="noopener noreferrer"
          >
            view
          </Link>
        </div>
        <div className="flex gap-1">
          <p>JavaScript (Basic) from Hackerrank -</p>
          <Link
            to="https://www.hackerrank.com/certificates/931b71699c23"
            target="_blank"
            rel="noopener noreferrer"
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
}
