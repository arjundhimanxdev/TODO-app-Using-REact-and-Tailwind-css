import { Outlet } from "react-router-dom";



const PublicLayoutPage = () => {
  return (
    <div className="p-4">
    <header>
         <section className="flex flex-col justify-center items-center mt-8">
            <h1 className="text-black text-4xl font-bold font-sans">TODO App</h1>
            <p className="text-gray-600 items-center">Stay organized and productive</p>
        </section>
    </header>

    <main>
        <Outlet />
    </main>

    <footer>
        <section className="flex flex-col justify-center items-center">
            <p className="text-gray-500 ">Built with React and Tailwind CSS</p>
        </section>
    </footer>
    </div>
  )
}

export default PublicLayoutPage;