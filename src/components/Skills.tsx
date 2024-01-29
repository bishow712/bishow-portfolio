import React from 'react'

const Skills = () => {
  return (

    <div className='relative bg-opacity-50 p-6 pt-12 pb-20 shadow-lg text-gray-400 ' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)", height: "100%" }}>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='jumbo absolute -inset-[10px] opacity-30'></div>
      </div>
      <h1 className='relative text-3xl text-center p-5 px-14' style={{ paddingTop: "0rem" }}>Technical Skills</h1>
      <div className='md:flex md:justify-start'>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Languages</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">C#</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Python</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">JavaScript/TypeScript</p>
            </div>
          </div>
        </div>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Web Development</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">HTML</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">CSS</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Bootstrap</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Tailwind</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">React</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Node</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">ASP.NET</p>
            </div>
          </div>
        </div>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Database Development</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Microsoft SQL Server</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Entity Framework</p>
            </div>
          </div>
        </div>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Web Services</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">RESTful WebAPI</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">JSON</p>
            </div>
          </div>
        </div>

      </div>

      <div className='md:flex md:justify-start'>

        <div className='mx-4 mb-8 w-full'>
          <h1 className='text-2xl pb-4'>Tools</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">VS Code</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Microsoft Visual Studio</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">Microsoft SQL Server Management Studio</p>
              <p className="p-2 text-center text-l text-gray-100 bg-indigo-600 bg-opacity-50 rounded-md">GIT Version Control</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
