import Image from "next/image"
import { RiFacebookFill, RiInstagramLine, RiTwitterXLine } from "react-icons/ri"


const Footer = () => {
  return (
    <div>
      <div className="space-y-12 w-[80%] pt-24 pb-8 mx-auto flex flex-col lg:flex-row items-start justify-between ">
        <div>
          <Image
            src={'/logo.png'}
            alt=""
            width={80}
            height={85}
          />
          <div className="flex text-white gap-2.5">
            <RiFacebookFill size={35} className="rounded-full bg-orange p-2.5" /> 
            <RiInstagramLine  size={35} className="rounded-full bg-blue p-2.5" /> 
            <RiTwitterXLine  size={35} className="rounded-full bg-yellow p-2.5" /> 
          </div>
        </div>

        <div className="space-y-3.5">
          <h1 className="text-blue font-bold text-xl">قائمة</h1>
          <ul className="space-y-2">
            <li>حول</li>
            <li>قائمة</li>
            <li>مقالات</li>
            <li>اتصل</li>
          </ul>
        </div>
        <div  className="space-y-3.5">
          <h1 className="text-blue font-bold text-xl">سمات</h1>
          <ul className="space-y-2">
            <li>طعام طازج</li>
            <li>مطعم</li>
            <li>توصيل سريع</li>
          </ul>
        </div>
        <div className="space-y-3.5">
          <h1 className="text-blue font-bold text-xl">النشرة الإخبارية</h1>
          <div className="flex flex-col items-end gap-3.5">
            <input type="text" placeholder="بريد اليكتروني" className="py-2.5 px-8 border rounded-lg w-full" name="" id="" />
            <button className="text-white bg-orange py-2.5 px-5 rounded-lg">
            الإشتراك
            </button>
          </div>
          
        </div>

      </div>
      <div className="py-3.5 flex gap-5 flex-col lg:flex-row text-nowrap justify-between w-[80%] mx-auto border-t border-naturel">
          <div className="hidden w-full mx-auto lg:flex gap-12">
            <span>شروط الاستخدام</span>
            <span>سياسة خاصة </span>
          </div>
          <span>
          حقوق النشر © 2022 رواق كل الحقوق محفوظة
          </span>
      </div>
    </div>
    
  )
}

export default Footer