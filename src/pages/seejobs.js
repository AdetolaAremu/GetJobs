import React, { useState } from 'react';

const allvacancy = ([
  {position:'Frontend Engineer', company:'Lookman Plc', pay_range:'180-250,000'}, {position:'Software Engineer', company:'Pruvia Ltd', pay_range:'350-500,000'},
  {position:'UI/UX Designer', company:'Bella Malla Plc', pay_range:'180-250,000'}, {position:'Ruby Developer', company:'Bank of Lagos', pay_range:'280-350,000'},
  {position:'Backend Engineer', company:'Incubator Ltd', pay_range:'220-280,000'}, {position:'Frontend Developer', company:'Pama Ltd', pay_range:'150-220,000'},
  {position:'Web 3.0 Engineer', company:'The Oracle Plc', pay_range:'250-300,000'}, {position:'Devops Engineer', company:'Settle Debts Plc', pay_range:'280-350,000'},
  {position:'Snr Java Engineer', company:'JV Ally', pay_range:'650-700,000'}, {position:'Product Designer', company:'R & D', pay_range:'250-300,000'},
  {position:'Backend Developer', company:'Explosive LLC', pay_range:'150-200,000'}, {position:'Nodejs Engineer', company:'Trik Plc', pay_range:'290-380,000'}
])

function Seejobs() {

  const [searchvalue, setsearchvalue] = useState('')
  const [findjobs, setfindjobs] = useState(allvacancy)

  const filterjobs = (e) => {
    const keyword = e.target.value;

    if(keyword !== ''){
      const results = allvacancy.filter((job)=> {
        return job.position.toLowerCase().startsWith(keyword.toLowerCase());
      })
      setfindjobs(results);
    } else {
      setfindjobs(allvacancy);
    }
    setsearchvalue(keyword);
  }

  return(
    <div className='px-5 flex flex-col lg:flex-row'>
      <div>
        <div className='bg-blue-100 p-5 w-full'>
          <p className='font-semibold'>Create Job Alert</p>
          <p className="mb-1">Create job alert and never miss a job!</p>
          <select className='p-2 border border-purple-600 rounded-md mb-2 w-full'>
            <option selected>Choose</option>           
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="uiux">UI/UX</option>
          </select>
          <div>
            <input type="text" placeholder='Enter mail address'
              className='p-2 border border-purple-600 rounded-md w-full' 
            />
          </div>
          <button className='bg-purple-700 mt-2 p-2 text-white rounded-md w-full'>Subscribe</button>
        </div>
        <div className='bg-purple-200 p-2 rounded-lg shadow-lg w-full mt-3'>
          <div>
            <div><label>Search Jobs</label></div>
            <div>
              <input type="text" className='p-2 border border-purple-600 rounded-md mb-2 w-full mb-2' 
                placeholder='Enter keyword' value={searchvalue} onChange={filterjobs}
              />
            </div>
          </div>
          <div><button className='bg-blue-200 p-1 rounded-lg my-1'>Full Time</button></div>
          <div><button className='bg-blue-200 p-1 rounded-lg my-1'>Part Time</button></div>
          <div><button className='bg-blue-200 p-1 rounded-lg my-1'>Internship</button></div>
        </div>
      </div>

      <div className="px-3 grid sm:grid-cols-1 lg:grid-cols-3">
        {findjobs && findjobs.length > 0 ? (
          findjobs.map((job) => (
            <div key={job.id} className="bg-white p-2 w-72 m-3 h-40 mb-3 shadow-2xl rounded-lg cursor-pointer hover:bg-blue-100">
              <div className="flex justify-between px-2">
                <div className='mb-3 pt-2'>
                  <div><p>Position:</p></div>
                  <div><p>Company:</p></div>
                  <div><p>Pay range:</p></div>
                </div>
                <div className='mb-3 pt-2 font-bold'>
                  <div className="">{job.position}</div>
                  <div className="">{job.company}</div>
                  <div className="">{job.pay_range}</div>
                </div>
              </div>
              <div className='text-center'>
                <a href='/apply'>
                  <button className='bg-pink-700 p-2 text-white rounded-md w-full'>Apply</button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  )
}

export default Seejobs;