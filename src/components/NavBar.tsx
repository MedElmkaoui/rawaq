import Image from "next/image"


const NavBar = () => {
  return (
    <div className="relative mt-2.5 h-[80px] w-full flex items-start justify-between ">
      <Image 
        src={'/logo.png'}
        alt=""
        width={75}
        height={50}
        className="mt-1 z-10"
      />
      <button className="font-bold border border-blue py-1.5 px-5 rounded-xl text-blue ">
      اتصل بنا
      </button>
      
    </div>
  )
}

export default NavBar
