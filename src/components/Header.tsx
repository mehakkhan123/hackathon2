import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return (
      <div className="w-full h-[96px]">
      <header className="w-full h-[36px] bg-[#F5F5F5] flex justify-between items-center px-8">
<Image src={"/images/Frame.png"} alt="logo" width={24} height={24} className="cursor-pointer"/>

<ul className="flex gap-6  h-[36px] text-[11px] font-medium leading-[14px] items-center justify-center">
    <li className=""><Link href="">Find a Store</Link></li>
    <li className="border-l border-black pl-4"><Link href="">Help</Link></li>
    <li className="border-l border-black pl-4"><Link href="">Join Us</Link></li>
    <li className="border-l border-black pl-4"><Link href="">Sign In</Link></li>
</ul>
      </header>

      <nav className="w-full h-[60px] flex justify-center items-center px-2">
        <div>
        <Image src={"/images/logo.png"} alt="logo" width={78.47} height={78.47} className="pl-4"/>
        </div>

        <div className="flex w-[1211px] h-[60px]  items-center justify-end gap-44 mr-[30px]">
        <ul className="flex gap-6 text-[16px] font-normal leading-[24px] text-center">
    <li className=""><Link href="">New & Featured</Link></li>
    <li className=""><Link href="">Men</Link></li>
    <li className=""><Link href="">Women</Link></li>
    <li className=""><Link href="">Kid</Link></li>
    <li className=""><Link href="">Sale</Link></li>
    <li className=""><Link href="">SNKRS</Link></li>
</ul>

{/* search bar */}

<div className="relative">
<CiSearch className="absolute w-[24px] h-[24px] left-3 top-[9px] font-medium text-[15px] leading-[18.31px] text-black" />
<input type="search" placeholder="Search" className="w-[180px] h-[40px] rounded-[100px] text-[#CCCCCC]  bg-[#F5F5F5] pl-12" />
</div>
        </div>

{/* icons */}
<div className="w-[84px] h-[60px] flex p-3 gap-3 justify-center items-center">
<CiHeart className="w-[36px] h-[36px]" />
<MdOutlineShoppingBag className="w-[36px] h-[36px]" />

</div>
      </nav>
      </div>
    )
  }


