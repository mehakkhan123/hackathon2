import Image from "next/image"

export default function Feature() {
  return (
    <div className="w-[1344px] h-[977px] mx-auto flex flex-col items-center justify-between">
        <div>  {/* Feature Heading */}
            <h3>Featured</h3>
        </div>

        <div>  {/* Image */}
        <Image src={"/images/feature.png"} alt="featured" width={1344} height={700}/>
        </div>

        <div className="w-[1008px] h-[177px] flex flex-col items-center justify-between">
            <h1 className="font-medium text-[54px] leading-[60px]">STEP INTO WHAT FEELS GOOD</h1>
            <p className="font-normal text-[15px] leading-6">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="w-[152.42px] h-[39px] bg-black text-white rounded-[30px] font-medium text-[15px] leading-6 text-center ">Find Your Shop</button>
        </div>

    </div>
  )
}
