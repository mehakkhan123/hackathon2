import Image from "next/image";
export default function Gear() {
  return (
    <div className="w-[1344px] h-[561px] flex flex-col mx-auto">
      <div>
        <h3>Gear Up</h3>
      </div>
      <div className="flex w-[1356px] h-[509px]">
        {" "}
        {/* gear images */}
        <div className="flex flex-col w-[666px] h-[509px] justify-between items-end">
          {" "}
          {/* left images of men */}
          <div className="flex w-[211px] h-[48px] justify-between items-center mr-8">
            <h1 className="font-medium text-[15px] leading-6">Shop Men's</h1>
            <Image
              src={"/images/lefticon.png"}
              alt="Left Icon"
              width={48}
              height={48}
            />
            <Image
              src={"/images/righticon.png"}
              alt="Right Icon"
              width={48}
              height={48}
            />
          </div>
          <div className="w-[666px] h-[447px] flex gap-2 justify-end">
            {" "}
            {/* images */}
            <div className="w-[300] h-[393px] flex flex-col justify-between">
              {" "}
              {/* image 1 */}
              <div>
                <Image
                  src={"/images/gear1.png"}
                  alt="Image 2"
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-[284px] h-[72px] flex">
                <div className="w-[231.53px] h-[72px] flex flex-col">
                  <h3 className="font-medium text-[15px] leading-6">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Men's Short-Sleeve
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Running Top
                  </h3>
                </div>
                <div>
                  <h3 className="font-medium text-[15px] leading-6">₹ 3 895</h3>
                </div>
              </div>
            </div>
            <div className="w-[300] h-[393px] flex flex-col justify-between">
              {" "}
              {/* image 2 */}
              <div>
                <Image
                  src={"/images/gear2.png"}
                  alt="Image 1"
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-[284px] h-[72px] flex">
                <div className="w-[231.53px] h-[72px] flex flex-col">
                  <h3 className="font-medium text-[15px] leading-6">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Men's Short-Sleeve
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Running Top
                  </h3>
                </div>
                <div>
                  <h3 className="font-medium text-[15px] leading-6">₹ 3 895</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[666px] h-[509px] justify-between items-end">
          {" "}
          {/* right images of women */}
          <div className="flex w-[211px] h-[48px] justify-between items-center mr-8">
            <h1 className="font-medium text-[15px] leading-6">Shop Men's</h1>
            <Image
              src={"/images/lefticon.png"}
              alt="Left Icon"
              width={48}
              height={48}
            />
            <Image
              src={"/images/righticon.png"}
              alt="Right Icon"
              width={48}
              height={48}
            />
          </div>
          <div className="w-[666px] h-[447px] flex gap-2 justify-end">
            {" "}
            {/* images */}
            <div className="w-[300] h-[393px] flex flex-col justify-between">
              {" "}
              {/* image 1 */}
              <div>
                <Image
                  src={"/images/gear3.png"}
                  alt="Image 3"
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-[284px] h-[72px] flex">
                <div className="w-[231.53px] h-[72px] flex flex-col">
                  <h3 className="font-medium text-[15px] leading-6">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Men's Short-Sleeve
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Running Top
                  </h3>
                </div>
                <div>
                  <h3 className="font-medium text-[15px] leading-6">₹ 3895</h3>
                </div>
              </div>
            </div>
            <div className="w-[300] h-[393px] flex flex-col justify-between">
              {" "}
              {/* image 2 */}
              <div>
                <Image
                  src={"/images/gear4.png"}
                  alt="Image 4"
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-[284px] h-[72px] flex">
                <div className="w-[231.53px] h-[72px] flex flex-col">
                  <h3 className="font-medium text-[15px] leading-6">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Men's Short-Sleeve
                  </h3>
                  <h3 className="font-normal text-[16px] leading-6">
                    Running Top
                  </h3>
                </div>
                <div>
                  <h3 className="font-medium text-[15px] leading-6">₹ 3 895</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
