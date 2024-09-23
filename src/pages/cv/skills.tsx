export default function Skills() {
  return (
    <div>
      <h4 className="font-bold">Skills</h4>
      <hr className="mt-2 mb-0.5 border-neutral-600" />{" "}
      <div className="text-sm flex gap-10">
        <div>
          <h5 className="font-semibold">Programming Languages:</h5>
          <h5 className="font-semibold">Libraries/Frameworks:</h5>
          <h5 className="font-semibold">Tools/Platforms:</h5>
          <h5 className="font-semibold">Databases:</h5>
        </div>
        <div>
          <p>JavaScript, C++, TypeScript</p>
          <p>React, Tailwind, Nest, Redux, Ant Design, SchadCn</p>
          <p>Git, GitHub, Jira, Photoshop, Canva</p>
          <p>MongoDB, PostgreSQL, Supabase</p>
        </div>
      </div>
    </div>
  );
}
