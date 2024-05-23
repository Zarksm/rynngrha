import { TechStuck } from "@/lib/Constant";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  return (
    <>
      <div className="w-full h-auto pb-10 md:pb-40 px-8 md:px-20">
        <div>
          <h1 className="font-fairplay text-[30px] md:text-[40px] text-greenl">
            Technologies I Use
          </h1>
        </div>
        <div className="pt-10 md:pt-16 relative overflow-hidden">
          <Marquee>
            {TechStuck.map((tech, index) => (
              <div key={index}>
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={100}
                  height={100}
                  className="ml-20 md:ml-40"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default TechStack;
