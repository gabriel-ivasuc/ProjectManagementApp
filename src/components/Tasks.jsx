import { useState } from 'react';

import NewTask from "./NewTask.jsx";
  const [enteredTask, setEneteredTask] = useState();

export default function Tasks(){
  return <section>
    <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
    <NewTask />
    <p className="my-4 text-stone-400">This project does not have any tasks yet.</p>
    <ul>

    </ul>
  </section>
}
