import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined,
    projects: []
  });

  function handleStartNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        projectSelectedId: null
      }
    });
  }

  let content;

  if (projectState.projectSelectedId === null) {
    content = <NewProject/>
  } else if (projectState.projectSelectedId === undefined) {
    content = <NoProjectSelected  onStartAddProject={handleStartNewProject}/>
  }

  return (
    <main className="flex h-screen gap-10 my-8">
      <ProjectSideBar onStartAddProject={handleStartNewProject}/>
    {content}

    </main>
  );
}

export default App;
