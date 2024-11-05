import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <main className="flex h-screen gap-10 my-8">
      <ProjectSideBar/>
      <NewProject/>
    </main>
  );
}

export default App;
