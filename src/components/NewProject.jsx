import Input from './Input.jsx'
import { useRef } from 'react';
import Modal from './Modal.jsx';


export default function NewProject( { onAdd, onCancelProject } ) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle.trim() === '' ||
       enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
  <>
  <Modal ref={modal} buttonCaption='Okay'>
    <h2 className='my-4 text-xl font-bold text-stone-700'>Invalid Input</h2>
    <p className='mb-4 text-stone-700'>Ooops... Looks like yout forgot to enter a value.</p>
    <p className='mb-4 text-stone-700'>Please make sure you provide a valid value for every input field.</p>
  </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4 '>
        <li>
          <button onClick={onCancelProject} className='px-4 py-2 rounded-md bd-stone-800 text-stone-800 hover:text-stone-950 hover:bg-stone-400'>Cancel</button>
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
  </>
  );
}
