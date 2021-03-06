import React from 'react';

function Postjobs() {
  return(
    <div className='bg-gray-200'>
      <div>
        <div className='text-center my-2'>
          <p className='font-bold'>Use the form below to post a job ad</p>
          <p>Please note that any field marked <span className='font-bold text-red-700'>(*)</span> is mandatory</p>
        </div>
        <form className='rounded-lg bg-gray-200 p-2 my-2'>
          <div>
            <div className='text-center my-1'>
              <div className="mb-1"><label>Name of Organization <span className="text-red-700">*</span></label></div>
              <div>
                <input type="text" className='border-2 border-purple-700 h-10 rounded-md px-3 w-80' 
                  placeholder="Enter name of Organization"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Vacant Position <span className="text-red-700">*</span></label></div>
              <div>
                <input type="text" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80' 
                  placeholder="Enter Vacant Position"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Years of Experience <span className="text-red-700">*</span></label></div>
              <div>
                <select type="text" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80'>
                  <option value="select" selected>Select</option>
                  <option value="1-2">1-2 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="8-10">8-10 years</option>
                  <option value="10plus">10 +</option>
                </select>
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Target Email Address <span className="text-red-700">*</span></label></div>
              <div>
                <input type="email" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80' 
                  placeholder="Enter Email Destination"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Contact Number <span className="text-red-600">(Not required)</span></label></div>
              <div>
                <input type="number" className='border-2 border-purple-700 h-10 rounded-md w-80 px-3'
                  placeholder="Enter Contact Number"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Pay Range <span className="text-red-700">*</span></label></div>
              <div>
                <select type="text" placeholder="Select Pay Range"
                  className='border-2 border-purple-700 h-10 px-3 rounded-md w-80'
                >
                  <option value="select" selected>Select Pay Range</option>
                  <option value="100-200">100,000 - 200,000naira</option>
                  <option value="250-350">250,000 - 350,000naira</option>
                  <option value="400-600">400,000 - 600,000naira</option>
                  <option value="700-900">700,000 - 900,000naira</option>
                  <option value="1000000">1,000,000 and above</option>
                </select>
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Job Requirements <span className="text-red-700">*</span></label></div>
              <div>
                <textarea type="text" cols='42' rows='10' placeholder="Input Job requirements such as duties and JD"
                  className='border-2 border-purple-700 rounded-md px-3 pt-3' 
                />
              </div>
            </div>
            <div className='text-center mb-3'>
              <button className='bg-purple-600 text-white font-bold p-2 rounded-lg'>SUBMIT JOB AD</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Postjobs;