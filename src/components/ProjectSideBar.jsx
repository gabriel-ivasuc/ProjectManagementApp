import Button from './Button.jsx';

export default function ProjectSideBar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300">Your Projects</h2>
      <Button text="Add new Project" onClick={onStartAddProject} />
      <ul>
        {projects.map(project => {
          let cssClasses =
            'w-full px-2 py-1 my-1 text-left rounded-sm text-stone-400 hover:text-stone-150 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-100';
          } else {
            cssClasses += ' text-stone-300';
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
