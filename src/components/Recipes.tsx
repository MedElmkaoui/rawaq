import Image from "next/image"


const Recipes = () => {
  return (
    <div className="my-24 relative">
        <div className="z-auto my-12">
          <div className="z-10 flex flex-col items-center space-y-5">
            <h3 className="text-xl text-center text-blue font-black">أقرأ أيضاً</h3>
            <h1 className="text-7xl text-center font-semibold">وصفات طبخ </h1>
            <p className="text-xl text-center text-gray w-[30%]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص .
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-16">
            <div className="z-10 relative bg-white w-[250px] rounded-3xl p-5 flex flex-col justify-center shadow-xl space-y-5">
              <div className="relative w-[250px] h-[260px]">
                <Image
                    src={'/recipes/03.png'}
                    alt=''
                    width={250}
                    height={250}
                    className='absolute -top-8 -left-2.5 rounded-3xl rounded-tl-[85px]'
                />
              </div>
                <h1 className="text-xl font-bold text-nowrap">خبز توست محمص </h1>
            </div>
            <div className="z-10 relative bg-white w-[250px] rounded-3xl p-5 flex flex-col justify-center shadow-xl space-y-5">
              <div className="relative w-[250px] h-[260px]">
                <Image
                    src={'/recipes/02.png'}
                    alt=''
                    width={320}
                    height={320}
                    className='absolute -top-8 -left-2.5 rounded-3xl rounded-tl-[85px]'
                />
              </div>
                <h1 className="text-xl font-bold text-nowrap">الوصفات الجديدة المفضلة</h1>
            </div>
            <div className="z-10 relative bg-white w-[250px] rounded-3xl p-5 flex flex-col justify-center shadow-xl space-y-5">
              <div className="relative w-[250px] h-[260px]">
                <Image
                    src={'/recipes/01.png'}
                    alt=''
                    width={320}
                    height={320}
                    className='absolute -top-8 -left-2.5 rounded-3xl rounded-tl-[85px]'
                />
              </div>
                <h1 className="text-xl font-bold text-nowrap">أفضل المطاعم اليابانية </h1>
            </div>
            
          </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="bg-blue h-3 w-3 rounded-full" />
        <div className="bg-naturel h-3 w-3 rounded-full" />
        <div className="bg-naturel h-3 w-3 rounded-full" />
      </div>
    </div>
  )
}

export default Recipes
