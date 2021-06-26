import React from 'react'

function Apply() {
  return(
    <div className='bg-gray-300 px-5'>
      <div><p className='text-2xl text-gray-700 text-center font-bold mb-3'>APPLICATION PAGE</p></div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='w-full'>
          <div className='flex'>
            <p>Company Name:</p>
            <p className='font-bold ml-2'>Lookman Plc</p>
          </div>
          <div className='flex'>
            <p>Position:</p>
            <p className='font-bold ml-2'>Frontend Developer</p>
          </div>
          <div className='flex'>
            <p>Years of Experience:</p>
            <p className='font-bold ml-2'>1-3 years</p>
          </div>
          <div className='flex'>
            <p>Pay Range:</p>
            <p className='font-bold ml-2'>180-250,000</p>
          </div>
          <div className=''>
            <p className='font-semibold'>Job Description:</p>
            <p className='ml-2'>
              We are looking for a qualified Front-end developer to join our IT team. 
              You will be responsible for building the ‘client-side’ of our web applications. 
              You should be able to translate our company and customer needs into functional and appealing interactive applications.
              If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, 
              then this job is for you. We expect you to be a tech-savvy professional, 
              who is curious about new digital technologies and aspires to combine usability with visual design.
            </p>
            <ul className='ml-2'>
              <li>Use markup languages like HTML to create user-friendly web pages</li>
              <li>Maintain and improve website</li>
              <li>Optimize applications for maximum speed</li>
              <li>Design mobile-based features</li>
              <li>Collaborate with back-end developers and web designers to improve usability</li>
              <li>Get feedback from, and build solutions for, users and customers</li>
              <li>Write functional requirement documents and guides</li>
              <li>Create quality mockups and prototypes</li>
              <li>Help back-end developers with coding and troubleshooting</li>
              <li>Ensure high quality graphic standards and brand consistency</li>
              <li>Stay up-to-date on emerging technologies</li>
            </ul>
            <div><p className='font-semibold ml-2'>Required Skills:</p></div>
            <ul className='ml-2'>
              <li>Html 5</li>
              <li>CSS 3</li>
              <li>Javascript Framework: Vuejs, React.js etc</li>
              <li>API's</li>
            </ul>
            <div className='my-2 ml-2'>
              <p className='font-semibold'>How to apply:</p>
              <p>
                If you are qualified, kindly apply for the job.
              </p>
            </div>
          </div>
        </div>
        <form className='w-3/5 rounded-md h-max w-full mb-5 p-3 bg-white'>
          <div><p className='text-center font-semibold mb-3'>All asterik(*) fields are deemed mandatory</p></div>
          <div className='text-center mb-2'>
            <div className="mb-1"><label>Full Name <span className="text-red-700">*</span></label></div>
            <div>
              <input type="text" className='border-2 border-purple-700 h-10 rounded-md px-3 w-full' 
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div className='text-center mb-2'>
            <div className="mb-1"><label>Email <span className="text-red-700">*</span></label></div>
            <div>
              <input type="email" className='border-2 border-purple-700 h-10 rounded-md px-3 w-full'
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div className='text-center my-1'>
            <div className="mb-1"><label>Contact Number <span className="text-red-700">*</span></label></div>
            <div>
              <input type="text" className='border-2 border-purple-700 h-10 rounded-md px-3 w-full' 
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div className='text-center my-1'>
            <div className="mb-1"><label>Salary Expectations <span className="text-red-700">*</span></label></div>
            <div>
              <input type="number" className='border-2 border-purple-700 h-10 rounded-md px-3 w-full' 
                placeholder="Enter Salary Expectations"
              />
            </div>
          </div>
          <div className='text-center my-2'>
              <div className="mb-1"><label>Notice Period <span className="text-red-700">*</span></label></div>
              <div>
                <select type="text" placeholder="Select Pay Range"
                  className='border-2 border-purple-700 h-10 px-3 rounded-md w-full'
                >
                  <option value="select" selected>Select Notice Period</option>
                  <option value="1w">1 week</option>
                  <option value="2w">2 weeks</option>
                  <option value="3w">3 weeks</option>
                  <option value="1m">1 month</option>
                  <option value="2m">2 months</option>
                </select>
              </div>
            </div>
          <div className='text-center mb-2'>
            <div className="mb-1"><label>Cover Letter <span className="text-red-700">*</span></label></div>
            <div>
              <textarea type="text" cols='42' rows='6' placeholder="Input Job requirements such as duties and JD"
                className='border-2 border-purple-700 rounded-md px-3 pt-3 w-full' 
              />
            </div>
          </div>
          <div className='text-center mb-2'>
            <div><label className=''>Upload CV:</label></div>
            <div><input type="file" className='border border-purple-600 rounded' /></div>
          </div>
          <div className='text-center'>
            <button className='bg-purple-600 text-white font-bold p-2 rounded-lg'>Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Apply;