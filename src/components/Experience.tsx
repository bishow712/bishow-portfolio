import React from 'react'

const Experience = () => {
  return (
    <div>
      <h1 className='text-3xl text-gray-400 text-center pb-1 px-14' style={{ paddingTop: "4rem" }}>Work Experience</h1>

      <div className='experience'>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className='text-[#4FC1E9]'>Front End Web Developer</h3>
            <span>@ Cubix Tech Pvt. Ltd.</span><br />
            <span>Duration : 3 Months</span>
            <p className='text-gray-500'>
              <li>Collaborated with the development team to create responsive and user-friendly web interfaces.</li>
              <li>Translated UI/UX designs into pixel-perfect web pages using HTML, CSS, Bootstrap and JavaScript.</li>
              <li>Actively researched and adopted emerging front-end technology, React JS and its best practices.</li>
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className='text-[#4FC1E9]'>Data Specialist</h3>
            <span>@ CloudFactory Nepal</span><br />
            <span>Duration : 2.4 years</span>
            <p className='text-gray-500'>
              <li>Entering customer and account data from source documents within time limits.</li>
              <li>Compiling, verifying accuracy and sorting information to prepare source data for computer entry.</li>
              <li>Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output.</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
