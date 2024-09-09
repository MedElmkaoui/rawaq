import Image from "next/image"

const Popular = () => {
  return (
    <div className="relative my-36 grid lg:grid-cols-2 items-center justify-between gap-12">
      <div className="z-10 grid grid-cols-2 items-center gap-5">
        <div className="flex flex-col items-end">
            <div className="h-[90%] mb-5  rounded-3xl rounded-tr-[85px] overflow-hidden shadow-lg">
                <Image
                    src={'/02.png'}
                    alt=''
                    width={200}
                    height={200}
                    className='w-full h-full'
                />
            </div>
            <div className='bg-gradient-orange rounded-2xl rounded-br-[85px] h-[150px] w-[75%] overflow-hidden'>
                <Image
                    src={'/way.png'}
                    alt=''
                    width={200}
                    height={200}
                    className='w-full h-full'
                />
            </div>

        </div>
        <div className="flex flex-col items-start">
            <div className='bg-gradient-blue rounded-2xl rounded-tl-[45px] h-[15%] w-[75%]'>
                <Image
                    src={'/way.png'}
                    alt=''
                    width={200}
                    height={200}
                    className='w-full h-full'
                />
            </div>
            <div className='h-[90%] mt-5 rounded-3xl rounded-bl-[85px] overflow-hidden shadow-lg'>
                <Image
                    src={'/03.png'}
                    alt=''
                    width={200}
                    height={200}
                    className='w-full h-full'
                />
            </div>
        </div>
        
      </div>
      <div className='z-10 space-y-5'>
            <h3 className='text-blue font-semibold text-2xl'> معلومات عنا</h3>
            <h1 className='text-5xl xl:text-6xl font-bold lg:leading-[220px] lg:w-[60%]'>المطعم الشعبي الأول</h1>
            <p className=' text-xl lg:w-[80%]'>
            هذا النص هو مثال لنص أساسي.           
             </p>
            <p className="text-gray text-lg w-[80%]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص . 
            </p>
            <button className='border border-blue py-2 px-5 font-semibold text-blue rounded-lg'>
            معلومات عنا            
            </button>
        </div>
        <div className="bg-gradient-light h-[92%] w-[110%] -right-32 top-[5%] rounded-3xl rounded-bl-[150px] absolute" />
    </div>
  )
}

export default Popular
