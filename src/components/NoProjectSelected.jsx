import NoProjectImage from '../assets/projectsImage.jpg';
import Button from './Button.jsx'

export default function NoProjectSelected({ onStartAddProject }) {
  return <div className="w-2/3 mt-24 text-center">
    <img src={NoProjectImage} alt="Empty task list" className='object-contain h-16 mx-auto rounded-md w-36 '/>
    <h2 className='my-4 text-xl font-bold text-stone-500'>No Project Selected</h2>
    <p className='mb-4 text-stone-400'>Select a project or get started with a new one</p>
    <p> <Button text='Create new Project' onClick={onStartAddProject}/> </p>
  </div>
}
