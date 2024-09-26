export default function Skills() {
  return (
    <div>
      <h1 className="font-bold">Skills</h1>
      <hr className="mt-2 mb-0.5 border-neutral-600" />{" "}
      <div className="text-sm">
        <div className="flex gap-2 items-center">
          <h5 className="font-semibold">Programming Languages:</h5>{" "}
          <span>JavaScript, C++, TypeScript</span>
        </div>
        <div className="flex gap-2 items-center">
          <h5 className="font-semibold">Libraries / Frameworks:</h5>{" "}
          <span>React, Tailwind, Nest, Redux, Ant Design, ShadCn</span>
        </div>
        <div className="flex gap-2 items-center">
          <h5 className="font-semibold">Databases:</h5>{" "}
          <span>MongoDB, PostgreSQL, Supabase</span>
        </div>
        <div className="flex gap-2 items-center">
          <h5 className="font-semibold">Tools / Platforms:</h5>{" "}
          <span>Git, GitHub, Jira, Photoshop, Canva</span>
        </div>
      </div>
    </div>
  );
}
