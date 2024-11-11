import NoProjectImage from '../assets/project-planning.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        src={NoProjectImage}
        alt="Empty task list"
        className='object-contain w-full mx-auto rounded-md'
      />
      <h2 className='my-4 text-xl font-bold text-stone-500'>No Project Selected</h2>
      <p className='mb-4 text-stone-400'>Select a project or get started with a new one</p>
      <div>
        <Button text='Create new Project' onClick={onStartAddProject} />
      </div>
    </div>
  );
}
