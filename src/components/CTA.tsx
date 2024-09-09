import { url } from "inspector"
import Image from "next/image"

const CTA = () => {
  return (
    <div className="my-24 relative w-[60%] p-12 rounded-3xl mx-auto bg-white shadow-xl h-[180px] flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold">
            اطلب الان
            </h1>
            <span>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
            </span>
        </div>
        <button className="py-3 px-6 font-bold bg-orange text-white rounded-lg">
        اتصل بنا
        </button>
        <Image
            src={'/way-1.png'}
            alt=''
            width={200}
            height={200}
            className='-z-10 w-full h-full rounded-2xl rounded-tl-[65px] absolute'
        />
    </div>
  )
}

export default CTA