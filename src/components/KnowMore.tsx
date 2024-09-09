import Image from 'next/image'
import React from 'react'

function KnowMore() {
  return (
    <div className='relative my-24 flex flex-col lg:flex-row justify-center items-center lg:gap-3 gap-24'>
      <div className='col-span-1 space-y-8'>
         <div className='space-y-3.5'>
           <h3 className='text-blue font-semibold'>اعرف أكثر</h3>
            <h1 className='text-5xl font-bold lg:w-[50%] w-[95%] '>شاهد اخر الوصفات عبر تطبيقنا</h1> 
         </div>
         <p className='lg:w-[50%] w-[95%]'>
         ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل.
         </p>
         <div className='w-fit gap-3 flex justify-between items-center'>
            <button className='border border-blue py-2 rounded-lg px-5 font-semibold text-blue'>
            تطبيقات جوجل
            </button>
            <button className='border border-blue py-2 rounded-lg px-5 font-semibold text-blue'>
            متجر أبل
            </button>
         </div>
      </div>
      <div className='z-40 relative col-span-2'>
        <Image
            src={'/iphone.png'}
            alt=''
            height={400}
            width={400}
            className='rounded-[35px] rounded-tr-[85px] z-10'
        /> 
         <div className='-z-10 absolute bottom-36 lg:-right-10  bg-gradient-blue rounded-2xl rounded-br-[65px] h-[45%] w-[55%]'>
            <Image
                src={'/way-1.png'}
                alt=''
                width={200}
                height={200}
                className='w-full h-full'
            />
          </div>
         <div className='-z-10 absolute lg:-top-16 -top-8 lg:-left-10 left-0 bg-gradient-orange rounded-2xl rounded-tl-[65px] h-[45%] w-[55%]'>
            <Image
                src={'/way-1.png'}
                alt=''
                width={200}
                height={200}
                className='w-full h-full rounded-2xl rounded-tl-[65px]'
            />
          </div>
      </div>
      <div className="-z-20 bg-gradient-light-yellow rounded-tr-[85px] rounded-br-[25px] h-[80%] w-[115%] absolute -left-[10%] lg:top-10 -top-16 overflow-hidden" />
    </div>
  )
}

export default KnowMore