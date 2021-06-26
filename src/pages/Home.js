import React from 'react';
import '../components/Home.css'
import google from '../images/google.webp';
import flutter from '../images/flutter.webp';
import gtb from '../images/gtb.webp'
import playstore from '../images/playstore.png';
import appstore from '../images/iphone.png';

const homevacancy = [
  {position:'Frontend Engineer', company:'Lookman Plc', pay_range:'180-250,000'}, {position:'Software Engineer', company:'Pruvia Ltd', pay_range:'350-500,000'},
  {position:'UI/UX Designer', company:'Bella Malla Plc', pay_range:'180-250,000'}, {position:'Automation Engineer', company:'Bank of Lagos', pay_range:'280-350,000'},
  {position:'Backend Engineer', company:'Incubator Ltd', pay_range:'220-280,000'}, {position:'Frontend Developer', company:'Pama and Puma', pay_range:'150-220,000'},
]

function Home() {
  return(
    <div>
      <div>
        <div className='bg-blue-100 topone'>
          <div>
            <p className='flex font-bold justify-center pt-24 sm:text-2xl lg:text-3xl md:text-2xl'>Over 15,000 Jobs Listed Here!</p>
            <p className='flex justify-center pt-2 sm:text-2xl lg:text-2xl md:text-2xl'>Your dream job is waiting for you</p>
          </div>
          <div className='mt-2 flex justify-center'>
            <div className='flex bg-white w-max p-2 rounded-lg'>
              <div><input type="text" placeholder='Job title' 
                className='border border-white h-9 rounded-md p-5 w-28 lg:w-56 md:w-32'
              /></div>
              <div><input type="text" placeholder='City'
                className='border border-white h-9 rounded-md p-5 ml-3 w-28 lg:w-56 md:w-32'
              /></div>
              <div>
                <a href="/apply">
                  <button className='bg-purple-800 text-white w-24 ml-3 p-2 rounded-md lg:w-28'>Find Job</button>
                </a>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-3 mt-9 sm:pl-10 md:pl-18 lg:pl-20'>
            <div>
              <img src={google} alt="google" className='floatimg w-64' />
              <div 
                className='font-semibold w-28 text-center text-sm p-2 bg-gray-100 rounded-md 
                lg:text-base lg:w-40'
              >
                <p>5 Employees Hired</p>
              </div>
            </div>
            <div>
              <img src={flutter} alt="flutter" className='floatimg' />
              <div 
                className='font-semibold w-28 text-center text-sm p-2 bg-gray-100 rounded-md 
                lg:text-base lg:w-40'
              >
                <p>2 Employees Hired</p>
              </div>
            </div>
            <div>
              <img src={gtb} alt="gtb" className='floatimg' />
              <div 
                className='font-semibold w-28 text-center text-sm p-2 bg-gray-100 rounded-md 
                lg:text-base lg:w-40'
              >
                <p>8 Employees Hired</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div>
          <div className='mt-5 flex justify-between px-16'>
            <div><p className='text-2xl mt-2'>Latest Jobs</p></div>
            <a href="/seejobs">
              <button className='bg-pink-700 text-white p-2 rounded-lg'>See All</button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='px-3 grid sm:grid-cols-1 lg:grid-cols-3'>
          {
            homevacancy.map((thevacancy) =>{
              return(
                <div className="p-2">
                  <div className="bg-white rounded-lg w-80 p-5 mb-3 shadow-2xl cursor-pointer hover:bg-blue-100">
                    <div className="flex">
                      <div className="pt-2 mb-2 mr-8">
                        <p>Position</p>
                        <p>Company</p>
                        <p>Pay Range</p>
                      </div>
                      <div className="font-bold pt-2">
                        <p>{ thevacancy.position }</p>
                        <p>{ thevacancy.company }</p>
                        <p>{ thevacancy.pay_range }</p>
                      </div>
                    </div>
                    <div className='text-center'><a href='/apply'><button className='bg-pink-700 p-2 text-white rounded-md w-full'>Apply</button></a></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section>
        <div className='bg-blue-100 h-72'>
          <p className='font-bold text-2xl mb-3 text-center text-gray-800'>DOWNLOAD OUR APP</p>
          <div className='flex pt-10 justify-between px-10 lg:px-32 '>
            <div>
              <a href="/">
                <img src={playstore} alt="playstore" className='appimage h-24 w-80' />  
              </a>
            </div>
            <div>
              <a href="/">
              <img src={appstore} alt="appstore" className='appimage h-24 w-80' />
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="font-semibold text-lg text-gray-800">Get the job alerts via push notifications</p>
            <p className="font-bold text-2xl text-gray-600">Never miss a job!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;