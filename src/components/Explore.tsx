import Image from "next/image"


const Explore = () => {
  return (
    <div className="my-24 space-y-24">
      <h1 className="text-center text-3xl text-blue font-semibold">أستكشف حسب الفئة</h1>
      <div className="flex flex-col lg:flex-row  gap-12 items-center justify-center">
        <div className="w-[150px] relative flex flex-col items-center rounded-[25px] bg-gradient-light-orange">
            <div className="-mt-[30%] bg-white h-24 w-24 rounded-full shadow-lg absolute flex items-center justify-center ">
                <Image
                    src={'/icons/04.png'}
                    alt=""
                    width={30}
                    height={30}
                    className=""
                />
            </div>
            <div className="h-[180px] px-8 flex items-center">
                <h2 className="font-bold text-xl text-nowrap">عصائر طبيعة</h2>
            </div>
        </div>
        <div className="w-[150px] relative flex flex-col items-center rounded-[25px] bg-gradient-light-yellow">
            <div className="-mt-[30%] bg-white h-24 w-24 rounded-full shadow-lg absolute flex items-center justify-center ">
                <Image
                    src={'/icons/05.png'}
                    alt=""
                    width={30}
                    height={30}
                    className=""
                />
            </div>
            <div className="h-[180px] px-8 flex items-center">
                <h2 className="font-bold text-xl text-nowrap"> وجبات عشاء</h2>
            </div>
        </div>
        <div className="w-[150px] relative flex flex-col items-center rounded-[25px] bg-gradient-light-orange">
            <div className="-mt-[30%] bg-white h-24 w-24 rounded-full shadow-lg absolute flex items-center justify-center ">
                <Image
                    src={'/icons/06.png'}
                    alt=""
                    width={30}
                    height={30}
                    className=""
                />
            </div>
            <div className="h-[180px] px-8 flex items-center">
                <h2 className="font-bold text-xl">حلويات</h2>
            </div>
        </div>
        <div className="w-[150px] relative flex flex-col items-center rounded-[25px] bg-gradient-light-blue">
            <div className="-mt-[30%] bg-white h-24 w-24 rounded-full shadow-lg absolute flex items-center justify-center ">
                <Image
                    src={'/icons/07.png'}
                    alt=""
                    width={30}
                    height={30}
                    className=""
                />
            </div>
            <div className="h-[180px] px-8 flex items-center">
                <h2 className="font-bold text-xl">مشروبات</h2>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Explore
