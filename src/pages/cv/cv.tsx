import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "../../components/ui/button";
import { MdFileDownload } from "react-icons/md";
import html2pdf from "html2pdf.js";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Certifications from "./certifications";
import Projects from "./projects";

export default function CV() {
  const printRef = useRef<HTMLDivElement>(null);

  const handleGeneratePDF = () => {
    const element = printRef.current;
    if (element) {
      const options = {
        margin: 0.5,
        filename: "Akash Patel Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(element).set(options).save();
    }
  };

  return (
    <>
      <Button
        className="inline fixed right-5 bottom-5"
        onClick={handleGeneratePDF}
      >
        <MdFileDownload className="text-lg" />
      </Button>
      <div className="grid gap-4 pb-1 " ref={printRef}>
        <header className="text-center">
          <h1 className="text-3xl font-bold">AKASH PATEL</h1>
          <div className="flex justify-center gap-2 mt-2 flex-wrap text-sm">
            <p>akashpatel10000@gmail.com</p>|<p>+918959996971</p>|
            <p>Jabalpur, Madhya Pradesh</p>
          </div>
          <div className="flex justify-center gap-2 mt-2 text-sm">
            <Link
              to="https://akaxh.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </Link>
            |
            <Link
              to="https://www.linkedin.com/in/thefstalphabet"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            |
            <Link
              to="http://github.com/thefstalphabet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            |
            <Link
              to="https://leetcode.com/thefstalphabet"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </Link>
            |
            <Link
              to="https://www.codechef.com/users/thefstalphabet"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeChef
            </Link>
          </div>
        </header>
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
      </div>
    </>
  );
}
