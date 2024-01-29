import React from 'react'

const Nav = () => {
    return (
        <div >
            <nav className="bg-gray-900 shadow-lg text-white p-2 rounded-b-lg">
                <div className="sm:flex items-center justify-between py-2 px-8 sm:px-12">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-gray-400 md:text-3xl">
                            <h1 className='glitch' title="bishow.dev">bishow.dev</h1>
                        </div>
                        {/* <div className="md:hidden">
                            <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                    <div className="flex flex-col sm:flex-row hidden md:block -mx-2">
                        <a href="/" className="text-gray-400 rounded hover:bg-gray-900 hover:text-indigo-600 hover:font-medium py-2 px-2 md:mx-2"
                            style={{ transition: "color 0.3s" }}
                            onMouseEnter={(e) => (e.target as HTMLElement).textContent = '<Home/>'} onMouseLeave={(e) => (e.target as HTMLElement).textContent = 'Home'}>Home</a>

                        <a href="/" className="text-gray-400 rounded hover:bg-gray-900 hover:text-indigo-600 hover:font-medium py-2 px-2 md:mx-2"
                            style={{ transition: "color 0.3s" }}
                            onMouseEnter={(e) => (e.target as HTMLElement).textContent = '<Skills/>'} onMouseLeave={(e) => (e.target as HTMLElement).textContent = 'Skills'}>Skills</a>

                        <a href="/" className="text-gray-400 rounded hover:bg-gray-900 hover:text-indigo-600 hover:font-medium py-2 px-2 md:mx-2"
                            style={{ transition: "color 0.3s" }}
                            onMouseEnter={(e) => (e.target as HTMLElement).textContent = '<Projects/>'} onMouseLeave={(e) => (e.target as HTMLElement).textContent = 'Projects'}>Projects</a>

                        <a href="/" className="text-gray-400 rounded hover:bg-gray-900 hover:text-indigo-600 hover:font-medium py-2 px-2 md:mx-2"
                            style={{ transition: "color 0.3s" }}
                            onMouseEnter={(e) => (e.target as HTMLElement).textContent = '<Experience/>'} onMouseLeave={(e) => (e.target as HTMLElement).textContent = 'Experience'}>Experience</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
