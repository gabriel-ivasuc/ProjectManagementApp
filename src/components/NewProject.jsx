import Input from './Input.jsx';
import { useState } from 'react';

export default function NewProject({ isVisible, onClose, onSave }) {
  if (!isVisible) return null;

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDueDate, setProjectDueDate] = useState('');


  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'projectTitle') {
      setProjectTitle(value);
    } else if (name === 'projectDescription') {
      setProjectDescription(value);
    } else if (name === 'projectDueDate') {
      setProjectDueDate(value);
    }
  }

  // function handleSave() {
  //   onClose();
  // }

  // function handleCancel() {
  //   setProjectTitle('');
  //   setProjectDescription('');
  //   setProjectDueDate('');
  //   onClose();
  // }

  return (
    <section>
      <Input
        label="Title"
        placeholder="Enter project title"
        onChange={handleChange}
        value={projectTitle}
        type="text"
        name="projectTitle"
      />
      <Input
        label="Description"
        placeholder="Enter project description"
        onChange={handleChange}
        value={projectDescription}
        type="text"
        name="projectDescription"
      />
      <Input
        label="Due date"
        onChange={handleChange}
        value={projectDueDate}
        type="date"
        name="projectDueDate"
      />
      <button
        onClick={onSave}
        className="px-4 py-2 mr-2 text-white bg-gray-700 rounded-md"
      >
        Save
      </button>
      <button
        onClick={onClose}
        className="px-4 py-2 text-white bg-gray-500 rounded-md"
      >
        Cancel
      </button>
    </section>
  );
}
