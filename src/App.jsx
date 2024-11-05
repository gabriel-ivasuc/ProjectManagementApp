import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  return (
    <main className="flex h-screen gap-10 my-8">
      <ProjectSideBar/>
      <NoProjectSelected/>
    </main>
  );
}

export default App;
