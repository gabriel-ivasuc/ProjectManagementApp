import Tasks from './Tasks.jsx';

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  if (!project) {
    return <div>No project selected or project data is missing.</div>;
  }

  const filteredTasks = tasks.filter(task => task.projectId === project.id);

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">{project.title}</h1>
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace">{project.description}</p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
