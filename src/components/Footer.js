import React from 'react';

function Footer() {
  return(
    <section>
      <div className='testi h-76'>
        <div>
          <p className='text-2xl text-center text-white pt-6'>Subscribe to Get Jobs alerts</p>
        </div>
        <div className='mt-3'>
          <div className='text-center'>
            <input className='h-8 mr-3 w-60 rounded p-2' placeholder='exp: you@gmail.com' type='email' />
            <button className='bg-white text-red-600 p-1 rounded-md'>Subscribe</button>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-5 pl-1 lg:pl-52 mt-3'>
          <div className='text-white mb-3'>
            <p className='font-bold text-lg'>About Us</p>
            <a href='/'><p>How it works</p></a>
            <a href='/'><p>Testimonials</p></a>
            <a href='/'><p>Careers</p></a>
            <a href='/'><p>Investors</p></a>
            <a href='/'><p>Terms of Service</p></a>
          </div>
          <div className='text-white mb-3'>
            <p className='font-bold text-lg'>Contact Us</p>
            <a href='/'><p>Contact</p></a>
            <a href='/'><p>Support</p></a>
            <a href='/'><p>Destinations</p></a>
            <a href='/'><p>Sponsorships</p></a>
          </div>
          <div className='text-white mb-3'>
            <p className='font-bold text-lg'>Videos</p>
            <a href='/'><p>Submit Video</p></a>
            <a href='/'><p>Ambassadors</p></a>
            <a href='/'><p>Agency</p></a>
            <a href='/'><p>Influencers</p></a>
          </div>
          <div className='text-white mb-3'>
            <p className='font-bold text-lg'>Social Media</p>
            <a href='/'><p>Twitter</p></a>
            <a href='/'><p>Instagram</p></a>
            <a href='/'><p>LinkedIn</p></a>
            <a href='/'><p>Facebook</p></a>
            <a href='/'><p>Youtube</p></a>
          </div>
        </div>
        <div>
          <p className='text-center text-white pb-2 font-semibold'>copyright TheJob 2021</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;