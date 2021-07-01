import React from 'react';

function Register() {
  return(
    <div className='bg-gray-200'>
      <div>
        <div className='text-center my-2'>
          <p className='font-bold text-2xl'>REGISTRATION PAGE</p>
          <p className="mt-2">Please note that any field marked <span className='font-bold text-red-700'>(*)</span> is mandatory</p>
        </div>
        <form className='rounded-lg bg-gray-200 p-2 my-2'>
          <div>
            <div className='text-center my-1'>
              <div className="mb-1"><label>Full Name <span className="text-red-700">*</span></label></div>
              <div>
                <input type="text" className='border-2 border-purple-700 h-10 rounded-md px-3 w-80' 
                  placeholder="Enter name of Organization"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Username <span className="text-red-700">*</span></label></div>
              <div>
                <input type="text" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80' 
                  placeholder="Enter Vacant Position"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Password <span className="text-red-700">*</span></label></div>
              <div>
                <input type="password" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80' 
                  placeholder="Enter Vacant Position"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Confirm Password <span className="text-red-700">*</span></label></div>
              <div>
                <input type="password" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80' 
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
              <div className="mb-1"><label>Email Address <span className="text-red-700">*</span></label></div>
              <div>
                <input type="email" className='border-2 border-purple-700 h-10 px-3 rounded-md w-80' 
                  placeholder="Enter Email Destination"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Contact Number <span className="text-red-700">*</span></label></div>
              <div>
                <input type="number" className='border-2 border-purple-700 h-10 rounded-md w-80 px-3'
                  placeholder="Enter Contact Number"
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <div className="mb-1"><label>Expected Monthly Pay Range</label></div>
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
            <div className='text-center mb-3'>
              <button className='bg-green-600 text-white font-bold p-3 rounded-lg w-80'>REGISTER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;