import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined,
    projects: []
  });

function  handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: id,
      }
    });
}

function handleDeleteProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      projectSelectedId: undefined,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
    }
  });
}

  function handleStartNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: null,
      }
    });
  }

  function handleCancelAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: undefined,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectid = Math.random();
      const newProject = {
      ...projectData,
      id: Math.random()
    };



      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.projectSelectedId);
  let content = <SelectedProject project={selectedProject}/>;

  if (projectState.projectSelectedId === null) {
    content = <NewProject onAdd={handleAddProject} onCancelProject={handleCancelAddProject}/>
  } else if (projectState.projectSelectedId === undefined) {
    content = <NoProjectSelected  onStartAddProject={handleStartNewProject} />
  }

  return (
    <main className="flex h-screen gap-10 my-8">
      <ProjectSideBar
        onStartAddProject={handleStartNewProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}

    </main>
  );
}

export default App;
