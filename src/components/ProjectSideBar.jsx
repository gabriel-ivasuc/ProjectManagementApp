import Button from './Button.jsx'

export default function ProjectSideBar() {
  return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-xl">
    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300">Your Projects</h2>
      <Button text='Add new Project' />
    <ul></ul>
  </aside>
}
