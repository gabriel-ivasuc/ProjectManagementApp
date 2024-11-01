

export default function ProjectSideBar({ handleClick })  {

  return (
    <aside className="p-4 pl-6">
      <div className="w-64 h-full p-4 bg-black rounded-md shadow-md project-sidebar">
        <div className="px-6 mb-4">
          <h1 className="text-xl font-bold text-gray-200">Projects</h1>
        </div>
        <div className="add-project-button">
          <button
            onClick={handleClick}
            className="w-full py-2 font-semibold text-gray-200 transition duration-200 bg-gray-700 rounded-md hover:bg-gray-600"
          >
            + Add Project
          </button>
        </div>
      </div>
    </aside>
  );
}
