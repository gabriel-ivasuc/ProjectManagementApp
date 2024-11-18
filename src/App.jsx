import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.projectSelectedId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== prevState.projectSelectedId)
      };
    });
  }

  function handleStartNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.projectSelectedId);
  const filteredTasks = projectState.tasks.filter(task => task.projectId === projectState.projectSelectedId);

  let content;

  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={filteredTasks}
      />
    );
  } else if (projectState.projectSelectedId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancelProject={handleCancelAddProject}
      />
    );
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartNewProject} />;
  }

  return (
    <main className="flex h-screen gap-10 my-8">
      <ProjectSideBar
        onStartAddProject={handleStartNewProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        projectSelectedId={projectState.projectSelectedId}
      />
      {content}
    </main>
  );
}

export default App;
