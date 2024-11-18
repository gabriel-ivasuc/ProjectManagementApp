import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask('');
  }

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="px-2 py-1 rounded-sm 2-64 bg-stone-200"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
