import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import { useState } from 'react';


function App(){
  const [formVisible, setFormVisible] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDueDate, setProjectDueDate] = useState('');


  function handleClick() {
    setFormVisible(true);
  }

  function handleCloseForm() {
    setFormVisible(false);
    setProjectTitle('');
    setProjectDescription('');
    setProjectDueDate('');

  }

  function handleSave() {
    handleCloseForm();
  }

  return (
    <main className="flex h-screen gap-8 py-8">
      <ProjectSideBar handleClick={handleClick}/>
     <NewProject isVisible={formVisible} onSave={handleSave} onClose={handleCloseForm}/>
    </main>
  );
}

export default App;
