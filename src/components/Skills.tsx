import React from 'react'

const Skills = () => {
  return (
    <div className='p-6 py-20 shadow-lg text-gray-400 bg-gray-900' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0 100%)", height: "100%" }}>
      <h1 className='text-3xl text-center p-8 px-14' style={{ paddingTop: "1rem" }}>Technical Skills</h1>
      <div className='md:flex md:justify-start'>
        
        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Languages</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">C#</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Python</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">JavaScript/TypeScript</p>
            </div>
          </div>
        </div>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Web Development</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">HTML</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">CSS</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Bootstrap</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Tailwind</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">React</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Node</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">ASP.NET</p>
            </div>
          </div>
        </div>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
          <h1 className='text-2xl pb-4'>Database Development</h1>
          <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
            <div className='pt-2 flex flex-wrap gap-3'>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Microsoft SQL Server</p>
              <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Entity Framework</p>
            </div>
          </div>
        </div>

        <div className='m-4 mb-8 w-full md:w-1/4 lg:w-1/4 '>
            <h1 className='text-2xl pb-4'>Web Services</h1>
            <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
              <div className='pt-2 flex flex-wrap gap-3'>
                <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">RESTful WebAPI</p>
                <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">JSON</p>
              </div>
            </div>
          </div>

      </div>

      <div className='md:flex md:justify-start'> 

          <div className='mx-4 mb-8 w-full'>
            <h1 className='text-2xl pb-4'>Tools</h1>
            <div className="pb-4 border-b-2 border-b-solid border-gray-500 md:border-0">
              <div className='pt-2 flex flex-wrap gap-3'>
                <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">VS Code</p>
                <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Microsoft Visual Studio</p>
                <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">Microsoft SQL Server Management Studio</p>
                <p className="p-2 text-center text-l text-gray-100 bg-blue-600 rounded-md hover:bg-blue-700">GIT Version Control</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Skills
