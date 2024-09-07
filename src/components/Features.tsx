import Image from "next/image"


const Features = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col items-center space-y-5">
        <h3 className="text-xl text-center text-blue font-black">أفضل أكل</h3>
        <h1 className="text-7xl text-center font-semibold">مميزات المطعم</h1>
        <p className="text-xl text-center text-gray w-[50%]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.</p>
      </div>
      <div className="flex justify-center items-center gap-12">
        <div className="w-[250px] rounded-3xl p-5 flex flex-col items-center justify-center shadow-xl space-y-8">
            <div className="rounded-full p-6 bg-gradient-light-orange ">
                <Image
                    src={'/icons/01.png'}
                    alt=''
                    width={55}
                    height={55}
                    className=''
                />
            </div>
            <h1 className="text-xl font-bold">مطعم واستراحة</h1>
            <p className="text-center text-gray ">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،</p>
            <button className="font-bold">
            اقرأ أكثر
            </button>
        </div>
        <div className="w-[250px] mt-24 rounded-3xl p-5 flex flex-col items-center justify-center shadow-xl space-y-8">
            <div className="rounded-full p-6 bg-gradient-light-blue ">
                <Image
                    src={'/icons/02.png'}
                    alt=''
                    width={55}
                    height={55}
                    className=''
                />
            </div>
            <h1 className="text-xl font-bold">توصيل فوري</h1>
            <p className="text-center text-gray ">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،</p>
            <button className="font-bold">
            اقرأ أكثر
            </button>
        </div>
        <div className="w-[250px] rounded-3xl p-5 flex flex-col items-center justify-center shadow-xl space-y-8">
            <div className="rounded-full p-6 bg-gradient-light-yellow ">
                <Image
                    src={'/icons/03.png'}
                    alt=''
                    width={55}
                    height={55}
                    className=''
                />
            </div>
            <h1 className="text-xl font-bold">أكل طازج</h1>
            <p className="text-center text-gray ">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،</p>
            <button className="font-bold">
            اقرأ أكثر
            </button>
        </div>
      </div>
    </div>
  )
}

export default Features
