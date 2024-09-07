import Image from "next/image"


const Special = () => {
  return (
    <div className="my-24 relative">
        <div className="z-auto my-12">
          <div className="z-10 flex flex-col items-center space-y-5">
            <h3 className="text-xl text-center text-blue font-black">أكلاتنا الزاكية</h3>
            <h1 className="text-7xl text-center font-semibold">الطعام المفضل</h1>
            <p className="text-xl text-center text-gray w-[50%]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.       
            </p>
          </div>
          <div className="flex justify-center items-center gap-12 py-12">
            <div className="z-10 relative bg-white w-[250px] rounded-3xl p-5 flex flex-col justify-center shadow-xl space-y-5">
              <div className="relative w-[250px] h-[200px]">
                <Image
                    src={'/special/01.png'}
                    alt=''
                    width={320}
                    height={320}
                    className='absolute -top-8 -left-2.5 rounded-3xl'
                />
              </div>
                <h1 className="text-xl font-bold">تشكيلة مشاوي</h1>
                <div className="pb-3.5 flex gap-1">
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/grayStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  
                </div>
                <div className="bg-gradient-light-blue h-16 w-16 absolute -bottom-8 -left-5 rounded-full flex items-center justify-center">
                    <span className="text-xl font-medium">45₪</span>
                </div>
            </div>
            <div className="z-10 relative bg-white w-[250px] rounded-3xl p-5 flex flex-col justify-center shadow-xl space-y-5">
              <div className="relative w-[250px] h-[200px]">
                <Image
                    src={'/special/02.png'}
                    alt=''
                    width={320}
                    height={320}
                    className='absolute -top-8 -left-2.5 rounded-3xl'
                />
              </div>
                <h1 className="text-xl font-bold">بيتزا كالازوني</h1>
                <div className="pb-3.5 flex gap-1">
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/grayStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  
                </div>
                <div className="bg-gradient-light-blue h-16 w-16 absolute -bottom-8 -left-5 rounded-full flex items-center justify-center">
                    <span className="text-xl font-medium">22₪</span>
                </div>
            </div>
            <div className="z-10 relative bg-white w-[250px] rounded-3xl p-5 flex flex-col justify-center shadow-xl space-y-3">
              <div className="z-10 relative w-[250px] h-[290px]">
                <Image
                    src={'/special/03.png'}
                    alt=''
                    width={320}
                    height={360}
                    className='absolute -top-8 -left-2.5 rounded-3xl rounded-tl-[85px]'
                />
              </div>
              <h1 className="text-xl font-bold">شاورما سوري</h1>
              <div className="pb-3.5 flex gap-1">
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/blueStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
                  <Image
                      src={'/icons/grayStar.png'}
                      alt=''
                      width={15}
                      height={15}
                      className=''
                  />
              </div>
              <div className="bg-gradient-light-blue h-16 w-16 absolute -bottom-8 -left-5 rounded-full flex items-center justify-center">
                <span className="text-xl font-medium">17₪</span>
              </div>
            </div>
          </div>
      </div>
      <div className="flex items-center justify-center">
        <button className='border border-blue py-2 px-5 font-semibold text-blue rounded-lg'>
        قائمة كاملة            
        </button>
      </div>
      <div className="-z-40 bg-gradient-light rounded-full h-[900px] w-[900px] absolute -left-[35%] -top-16 overflow-hidden" />
    </div>
  )
}

export default Special
