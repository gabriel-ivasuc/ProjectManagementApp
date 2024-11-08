import Input from './Input.jsx'
import { useRef } from 'react';


export default function NewProject( { onAdd } ) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return <div className='w-[35rem] mt-16'>
    <menu className='flex items-center justify-end gap-4 my-4 '>
      <li>
        <button className='px-4 py-2 rounded-md bd-stone-800 text-stone-800 hover:text-stone-950 hover:bg-stone-400'>Cancel</button>
      </li>
      <li>
        <button
          className='px-6 py-2 rounded-md bd-stone-800 text-stone-50 bg-stone-950 '  onClick={handleSave}>Save</button>
      </li>
    </menu>
    <div>
      <p>
        <Input ref={title} label='Title' type='text'/>
        <Input ref={description} label='Description' textarea/>
        <Input ref={dueDate} label='Due Date' type='date'/>
      </p>
    </div>
  </div>
}
