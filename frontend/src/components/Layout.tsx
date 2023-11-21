import { Link, Outlet } from 'react-router-dom'

const tailwindClass = ' h-full px-2 items-center flex'

export const Layout = () => {
  return (
    <div className='w-screen h-screen bg-slate-50 flex flex-col relative '>
      <nav className='w-full h-16 bg-white shadow-md flex flex-row justify-between'>
        <div className='flex flex-row ml-5 items-center justify-center'>
          <img className='h-full p-3' src='bth_logo.png' alt='BTH logo' />
          <h2 className='font-bold text-gray-600'>Assignment 1 : Simple Blog Site</h2>
        </div>
        <div className='flex flex-row items-center gap-4 mr-5 h-full'>
          <Link to='/' className={tailwindClass}>
            Blog
          </Link>
          <Link to='create' className={tailwindClass}>
            New Post
          </Link>
        </div>
      </nav>
      <div className='p-5 flex grow w-full '>
        <Outlet />
      </div>
    </div>
  )
}
