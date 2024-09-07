import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='my-12 z-auto grid lg:grid-cols-2 items-center gap-12'>
        <div className='z-10 space-y-12'>
            <h3 className='text-blue font-semibold text-2xl'>رواقَ كافيةِ</h3>
            <h1 className='text-5xl xl:text-8xl font-bold leading-[220px]'>المطعم الشعبي الأول في فلسطين</h1>
            <p className='text-gray text-xl w-[80%]'>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.
            </p>
            <button className='bg-orange py-2 px-5 font-semibold text-white rounded-lg'>
            انظر القائمة
            </button>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col justify-between'>
                <div className='mt-5 h-[80%]  bg-gradient-orange rounded-[25px] rounded-tr-[80px] ' />
                <div className='flex items-center justify-end'>
                    <div className='flex items-center justify-center rounded-full bg-gradient-orange p-6 -ml-5'>
                        <Image
                            src={'/icons/coffe.png'}
                            alt=''
                            width={20}
                            height={20}
                            className=''
                        />
                    </div>
                    
                    <Image
                        src={'/users/oval.svg'}
                        alt=''
                        width={70}
                        height={70}
                        className='rounded-full -ml-5'
                    />
                    <Image
                        src={'/users/oval.svg'}
                        alt=''
                        width={70}
                        height={70}
                        className='rounded-full -ml-5'
                    />
                    <Image
                        src={'/users/oval.svg'}
                        alt=''
                        width={70}
                        height={70}
                        className='rounded-full'
                    />
                    
                </div>
            </div>
            <div>
                <div className='bg-gradient-blue rounded-2xl rounded-tl-[45px] h-[15%] w-[75%]'>
                    <Image
                        src={'/way.png'}
                        alt=''
                        width={200}
                        height={200}
                        className='w-full h-full'
                    />
                </div>
                <div className='relative mt-5'>
                    <Image
                        src={'/Bitmap.png'}
                        alt=''
                        width={500}
                        height={200}
                        className='w-full h-full rounded-3xl rounded-bl-[85px]'
                    />
                    <div className='h-28 w-28 rounded-full absolute top-[50%] left-[50%] bg-white flex items-center justify-center'
                        style={{ 
                            translate :'-50% -50%'
                         }}
                    >
                        <Image
                            src={'/icons/Triangle.png'}
                            alt=''
                            width={20}
                            height={20}
                            className=''
                        />   
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gradient-light rounded-full h-[700px] w-[700px] absolute -right-[250px] -top-[150px]" />
      
    </div>
  )
}

export default Hero
