import React from 'react';

function dashboard() {
  return(
    <div className='bg-gray-100'>      
      <div className='flex justify-between px-10 pt-6'>
        <div><p className='font-bold text-2xl'>Jamiu, Soyoyo</p></div>
        <div className='flex'>
          <div className='h-10 w-10 mr-6 shadow-2xl bg-white text-center pt-2'>
            <i class="far fa-bell"><span className='h-2 absolute rounded-full w-2 bg-red-700 animate-ping'></span></i>
          </div>
          <div className='h-10 w-10 shadow-2xl bg-white text-center pt-2'><i class="fas fa-cog"></i></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 ml-8'>
        <div className='flex mb-2 rounded-md shadow-2xl w-max'>
          <div className='w-16 h-22 text-center pt-5 bg-blue-400'><i class="fab fa-creative-commons-sampling text-white text-3xl"></i></div>
          <div className='bg-white px-2 w-44 hover:bg-green-100 border border-blue-400 cursor-pointer'>
            <p className='font-bold text-2xl mb-2'>45</p>
            <p className='text-sm font-semibold'>Total number of <br/> Applications</p>
          </div>
        </div>
        <div className='flex mb-2 rounded-md shadow-2xl w-max'>
          <div className='w-16 h-22 text-center pt-5 bg-yellow-300'><i class="far fa-check-square text-white text-3xl"></i></div>
          <div className='bg-white px-2 w-44 border border-yellow-300 hover:bg-green-100 cursor-pointer'>
            <p className='font-bold text-2xl mb-2'>15</p>
            <p className='text-sm font-semibold'>Total number of Responses</p>
          </div>
        </div>
        <div className='flex mb-2 rounded-md shadow-2xl w-max'>
          <div className='w-16 h-22 text-center pt-5 bg-green-300'><i class="fas fa-wallet text-white text-3xl"></i></div>
          <div className='bg-white px-2 w-44 border border-green-300 hover:bg-green-100 cursor-pointer'>
            <p className='font-bold text-2xl mb-2'>30</p>
            <p className='text-sm mt-2 font-semibold'>Total Number of Pending Responses</p>
          </div>
        </div>
        <div className='flex mb-2 rounded-md shadow-2xl w-max'>
          <div className='w-16 h-22 text-center pt-5 bg-blue-500'><i class="fas fa-coins text-white text-3xl"></i></div>
          <div className='bg-white px-2 w-44 border border-blue-500 hover:bg-green-100 cursor-pointer'>
            <p className='font-bold text-2xl mb-2'>0</p>
            <p className='text-sm mt-2 font-semibold'>Total number of rejections</p>
          </div>
        </div>
      </div>

      <div className='mt-10 px-5 grid grid-cols-2 lg:grid-cols-4 mb-2'>
        <div className='w-44 text-center mr-4'>
          <div><p className='font-bold text-gray-600 sm:mb-1 lg:mb-4'>SUCCESSFUL</p></div>
          <div className='bg-white mb-2 px-5 pt-6 h-44 shadow-2xl rounded-md cursor-pointer hover:bg-green-100'>
            <div className=''>
              <p className='font-bold text-2xl text-gray-700'>90%</p>
              <div className='flex justify-center pt-10'><p className='bg-green-500 h-2 w-10 rounded-full'></p></div>
              <p className='pt-3 text-sm font-semibold'>% of Successful Applications</p>
            </div>
          </div>
        </div>
        <div className='w-44 text-center'>
          <div><p className='font-bold text-gray-600 sm:mb-1 lg:mb-4'>UNSUCCESSFUL</p></div>
          <div className='bg-white mb-2 px-5 pt-6 h-44 shadow-2xl rounded-md cursor-pointer hover:bg-green-100'>
            <div className=''>
              <p className='font-bold text-2xl text-gray-700'>6%</p>
              <div className='flex justify-center pt-10'><p className='bg-blue-500 h-2 w-10 rounded-full'></p></div>
              <p className='pt-3 text-sm font-semibold'>% of Unsuccessful Applications</p>
            </div>
          </div>
        </div>
        <div className='w-44 text-center mr-4'>
          <div><p className='font-bold text-gray-600 sm:mb-1 lg:mb-4'>CANCELLED</p></div>
          <div className='bg-white mb-2 px-5 pt-6 h-44 shadow-2xl rounded-md cursor-pointer hover:bg-green-100'>
            <div className=''>
              <p className='font-bold text-2xl text-gray-700'>4%</p>
              <div className='flex justify-center pt-10'><p className='bg-red-500 h-2 w-10 rounded-full'></p></div>
              <p className='pt-3 text-sm font-semibold'>% of Cancelled Applications</p>
            </div>
          </div>
        </div>
        <div className='w-44 text-center'>
          <div><p className='font-bold text-gray-600 sm:mb-1 lg:mb-4'>REJECTIONS</p></div>
          <div className='bg-white mb-2 px-5 pt-6 h-44 shadow-2xl rounded-md cursor-pointer hover:bg-green-100'>
            <div className=''>
              <p className='font-bold text-2xl text-gray-700'>0%</p>
              <div className='flex justify-center pt-10'><p className='bg-yellow-500 h-2 w-10 rounded-full'></p></div>
              <p className='pt-3 text-sm font-semibold'>% of Rejections</p>
            </div>
          </div>
        </div>
      </div>

      <div className='px-8 py-5 grid grid-cols-1 lg:grid-cols-2 mb-1'>
        <div className='bg-white shadow-lg rounded-lg w-80 m-1 p-2 hover:bg-green-100 cursor-pointer'>
          <div><p className='font-bold text-red-600 underline'>Get the best CV Review and Rewrite Services</p></div>
          <div><p className="font-semibold">Boost your chances of landing a job by 50%</p></div>
          <div><p>Hurry!</p></div>
          <div className='text-center'><button className='bg-purple-700 text-white font-semibold p-1 rounded-lg'>Click Me!</button></div>
        </div>
        <div className='bg-white shadow-lg rounded-lg w-80 m-1 p-2 hover:bg-green-100 cursor-pointer'>
          <div><p className='font-bold text-red-600 underline'>Get my E-Book on how to ace Interviews</p></div>
          <div><p className="font-semibold">Learn how to ace that interview and get jobs</p></div>
          <div><p>Hurry!</p></div>
          <div className='text-center'><button className='bg-purple-700 text-white font-semibold p-1 rounded-lg'>Click Me!</button></div>
        </div>
      </div>
    </div>
  )
}

export default dashboard;