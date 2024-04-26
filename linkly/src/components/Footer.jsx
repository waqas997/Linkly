import React from 'react';
import logo from '../images/footer_logo.png'

export default function Footer() {
  return (
    <div className='mt-28'>
      <div className='flex'>
        <span className='h-1 flex-1 bg-[#ABF0FF]'></span>
        {/* <span className='h-3 bg-[#ABF0FF]'></span> */}
        <span className='h-1 flex-1 bg-[#EBACFF]'></span>
        
        <span className='h-1 flex-1 bg-[#C2FFAB]'></span>
        <span className='h-1 flex-1 bg-[#BEC7FF]'></span>
        <span className='h-1 flex-1 bg-[#FFE57F]'></span>
        <span className='h-1 flex-1 bg-[#FF9889]'></span>
        <span className='h-1 flex-1 bg-[#ABFFD4]'></span>
      </div>
      <div className="main-container">
        <div className='w-9/12 m-auto'>
            <div className='flex justify-between flex-wrap  pt-12' >
            <div className='mb-5'>
                <h2 className='inter600 text-[#3E3E59]'>LINKLY</h2>
                <ul className='flex flex-col gap-3 mt-2'>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Features</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Pricing</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Competitors</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Affiliate Program</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Status & Uptime</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Contact</li>
                </ul>
            </div>
            <div className='mb-5'>
                <h2 className='inter600 text-[#3E3E59]'>Guides</h2>
                <ul className='flex flex-col gap-3 mt-2'>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Tracking links</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Link rotators</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Click fraud</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Vanity URls</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Blog</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Release Notes</li>

                </ul>
            </div>
            <div className='mb-5'>
                <h2 className='inter600 text-[#3E3E59]'>LIntegrations</h2>
                <ul className='flex flex-col gap-3 mt-2'>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Linkly for Chrome & Firefox</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Linkly for Google Sheets</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Linkly for Zapier</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Google Analytics $</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Google Tag Manager</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>API</li>
                </ul>
            </div>
            <div className='mb-5'>
                <h2 className='inter600 text-[#3E3E59]'>Legal</h2>
                <ul className='flex flex-col gap-3 mt-2'>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Terms of Use</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Privacy Policy</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>GDPR</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Affiliate Program</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Status & Uptime</li>
                    <li className='inter400 text-[#3e3e59] text-[14px]'>Contact</li>
                </ul>
            </div>
            </div>
            <div className='flex items-center justify-between mt-12'>
                <img src={logo} alt="" />
                <p className='text-[10px] text-[#3e3e59]'>© Linkly All rights reserved.</p>
                <div className='flex items-center gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
<path d="M6.125 9V12.5H8.75V18.625H12.25V12.5H14.875L15.75 9H12.25V7.25C12.25 6.76675 12.6418 6.375 13.125 6.375H15.75V2.875H13.125C10.7088 2.875 8.75 4.83375 8.75 7.25V9H6.125" stroke="#3C3E49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
<path d="M15.1016 3.57275H17.5367L12.2168 9.65298L18.4752 17.9268H13.575L9.73691 12.9088L5.3453 17.9268H2.9088L8.59889 11.4233L2.59521 3.57275H7.61987L11.0891 8.15943L15.1016 3.57275ZM14.247 16.4693H15.5963L6.88671 4.95369H5.43879L14.247 16.4693Z" fill="#3C3E49"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
<rect x="2.625" y="4.625" width="15.75" height="12.25" rx="4" stroke="#3C3E49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.125L13.125 10.75L8.75 13.375V8.125Z" stroke="#3C3E49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
<rect x="3.5" y="3.75" width="14" height="14" rx="4" stroke="#3C3E49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="10.5" cy="10.75" r="2.625" stroke="#3C3E49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4375 6.81255V6.81343" stroke="#3C3E49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
            </div>
        </div>
      </div>
    </div>
  );
}
