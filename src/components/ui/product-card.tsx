import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function ProductCard(props: {
  image: string;
  githubUrl: string;
  hostUrl: string;
  view: "col" | "row";
  size: number;
}) {
  const { image, githubUrl, hostUrl, view, size } = props;
  const [popupVisibility, setPopupVisibility] = useState<boolean>(false);
  return (
    <div
      className={`relative flex justify-center items-center bento-item flex-center ${view}-span-${size}`}
    >
      <img src={image} className="rounded-md object-cover h-full w-full" />
      <div className="absolute inset-0 bg-stone-800 bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
        <div className="flex gap-4">
          <Link to={hostUrl} target="_blank">
            <FaEarthAmericas className="text-3xl cursor-pointer fill-white" />
          </Link>
          <Link to={githubUrl} target="_blank">
            <FaGithub className="text-3xl cursor-pointer fill-white" />
          </Link>
          <GrView
            className="text-3xl cursor-pointer"
            style={{ color: "#fff" }}
            onClick={() => {
              setPopupVisibility(true);
            }}
          />
        </div>
      </div>
      {popupVisibility && (
        <div
          onClick={() => {
            setPopupVisibility(false);
          }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <img src={image} className="rounded-md w-[90vw] md:w-[80vw]" />
        </div>
      )}
    </div>
  );
}
