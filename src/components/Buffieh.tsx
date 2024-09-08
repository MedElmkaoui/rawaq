import Image from 'next/image'
import React from 'react'

const Buffieh = () => {
  return (
    <div className='relative my-24 flex justify-center items-center gap-3'>
      <div className='mt-24 col-span-1 space-y-8'>
         <div className='space-y-3.5'>
           <h3 className='text-blue font-semibold'>صالة عرض</h3>
            <h1 className='text-5xl font-bold'>بوفيـه مفتــــــوح</h1> 
         </div>
         
         <p className='w-[60%]'>
         هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص .
         </p>
         <div className='w-fit gap-3 flex justify-between items-center'>
            <button className='border border-blue rounded-full p-4'>
                <Image
                    src={'/icons/arrow.png'}
                    alt=''
                    height={10}
                    width={10}
                    className='rotate-180'
                />
            </button>
            <span className='font-medium'>1/5</span>
            <button className='border border-blue rounded-full p-4'>
                <Image
                    src={'/icons/arrow.png'}
                    alt=''
                    height={10}
                    width={10}
                    
                />
            </button>
         </div>
      </div>
      <div className='col-span-2 overflow-hidden'>
        <Image
            src={'/buf.png'}
            alt=''
            height={600}
            width={600}
            className='rounded-[35px] rounded-tr-[85px] '
        />
      </div>
      <div className="-z-40 bg-gradient-light-orange rounded-tr-[85px] rounded-br-[25px] h-[100%] w-[115%] absolute -left-[10%] top-16 overflow-hidden" />
    </div>
  )
}

export default Buffieh
