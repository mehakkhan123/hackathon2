import Image from "next/image"


export default function Hero() {
  return (
    <div>
        {/* title */}
    <div className="w-full h-[58px] bg-[#F5F5F5] flex flex-col justify-center items-center">
        <h2 className="font-medium text-[15px] leading-[16px] text-center">Hello Nike App</h2>
        <p className="font-normal text-[11px] leading-[24px] text-center">Download the app to access everything Nike. Get Your Great</p>
    </div>

    {/* Hero */}
    <div className="w-[1344px] h-[977px] flex flex-col justify-between items-center mx-auto">
        <div>
            <Image src={"/images/hero.png"} alt="hero" width={1344} height={700}/>
        </div>

        <div className="w-[1008px] h-[229px] flex flex-col justify-between items-center">
            <h6 className="font-medium text-[15px] leading-6 mt-3">First Look</h6>
            <h1 className="font-medium text-[56px] leading-[60px] uppercase">Nike Air Max Pulse</h1>
            <p className="font-normal text-[15px] leading-6 w-[511px] text-center">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.</p>
            <div className="flex gap-[6px] pt-[6px] pr-[379.64px] pl-[373.63px]"> {/* buttons */}
                <button className="w-[110.58px] h-[39px] bg-black text-white rounded-[30px] font-medium text-[15px] leading-6 text-center">Notify Me</button>
                <button className="w-[138.16px] h-[39px] bg-black text-white rounded-[30px] font-medium text-[15px] leading-6 text-center">Shop Air Max</button>

            </div>

        </div>

    </div>


    </div>
  )
}
