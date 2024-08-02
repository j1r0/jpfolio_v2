import React from 'react'

import { contactList } from '@/data'

const ContactsBars = () => {
  return (
    
    <div className='flex justify-center '>
      <div className=" fixed flex w-[95vw] flex-row bottom-0 items-end justify-between ">
        <div className="relative flex flex-col gap-5 justify-center items-center ">
          {contactList.map((contact, id) => contact.title !== 'Email' && (
            <a href={contact.link} key={id} className="hover:opacity-70 hover:-translate-y-[2px] ease-soft-spring text-xl transition duration-300">
              {contact.icon}
            </a>
          ))}
          <div className='h-36 w-0 border-[0.3px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50'></div>
        </div>
        <div className="relative flex flex-col gap-5  justify-center items-center ">
          {contactList.map((contact, id) => contact.title === 'Email' && (
            <a href={contact.link} key={id} className="[writing-mode:vertical-lr] font-thin hover:opacity-70 transition duration-300 hover:-translate-y-[2px] ">
              {contact.icon}
            </a>
          ))}
          <div className='h-36 w-0 border-[0.3px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50'></div>
        </div>
      </div>
    </div>
  )
}

export default ContactsBars