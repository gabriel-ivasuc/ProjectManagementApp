import noProjectImage from '../assets/no-projects.png';


export default function NoProjectSelected() {
  return (
  <div className="w-2/3 m-24 text-center">
     <img src={noProjectImage} alt='Empty task list' className='object-contain w-16 h-16 mx-auto'/>
     <h2 className='my-4 text-xl font-bold text-stone-500'>No project selected</h2>
     <p className='mb-4 text-stone-400'>Select a project or get started with a new one </p>

     <p className='mb-4'> <button className="w-full py-2 font-semibold text-gray-200 transition duration-200 bg-gray-700 rounded-md hover:bg-gray-600">Create new project</button></p>

  </div>
  )
}
