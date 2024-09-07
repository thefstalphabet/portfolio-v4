export default function Skills() {
  return (
    <div>
      <h4 className="font-bold">Skills</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />{" "}
      <div className="text-sm flex gap-10">
        <div>
          <h5 className="font-bold">Programming Languages:</h5>
          <h5 className="font-bold">Libraries/Frameworks:</h5>
          <h5 className="font-bold">Tools/Platforms:</h5>
          <h5 className="font-bold">Databases:</h5>
        </div>
        <div>
          <p>JavaScript, C++, TypeScript</p>
          <p>React, Node, Nest, Redux, AntD, Chakra UI</p>
          <p>Git, GitHub, JIRA, ChatGPT, Photoshop, Canva</p>
          <p>MongoDB, SQL</p>
        </div>
      </div>
    </div>
  );
}
