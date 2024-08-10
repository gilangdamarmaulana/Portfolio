import Image from "next/image";

export default function Skills() {
  return (
    <div
      className="flex-col w-full flex items-center justify-center h-screen md:h-[500px] mt-20 bg-neutral-950"
      id="skills"
    >
      <h1 className="text-6xl flex-col text-white font-serif items-center">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-20">
        <div className="group/item flex flex-col relative mt-10 bg-neutral-700 items-center h-[180px] w-[200px] justify-center">
          <div className="absolute h-2 w-full bottom-0 bg-purple-500 group-hover/item:h-full transition-all duration-300" />
          <p className="absolute text-white -translate-y-2 text-sm italic group-hover/item:z-10 group-hover/item:translate-y-6 transition-all duration-500">
            Intermediate
          </p>
          <p className="absolute text-white text-xl group-hover/item:z-10 -translate-y-8 group-hover/item:translate-y-0 transition-all duration-500">
            Adobe Photoshop
          </p>
          <Image
            src={"/ab.png"}
            width={50}
            height={50}
            alt="Adobe Photoshop"
            className="group-hover/item:z-0 opacity-0 -translate-y-12 group-hover/item:opacity-100 transition-all duration-500"
          />
        </div>
        <div className="group/item flex flex-col relative mt-10 bg-neutral-700 items-center h-[180px] w-[200px] justify-center">
          <div className="absolute h-2 w-full bottom-0 bg-purple-500 group-hover/item:h-full transition-all duration-300" />
          <p className="absolute text-white -translate-y-2 text-sm italic group-hover/item:translate-y-6 transition-all duration-500">
            Beginner
          </p>
          <p className="absolute text-white text-xl -translate-y-8 group-hover/item:translate-y-0 transition-all duration-500">
            Swift
          </p>
          <Image
            src={"/swift.png"}
            width={50}
            height={50}
            alt="Swift"
            className="group-hover/item:z-0 opacity-0 -translate-y-12 group-hover/item:opacity-100 transition-all duration-500"
          />
        </div>
        <div className="group/item flex flex-col relative mt-10 bg-neutral-700 items-center h-[180px] w-[200px] justify-center">
          <div className="absolute h-2 w-full bottom-0 bg-purple-500 group-hover/item:h-full transition-all duration-300" />
          <p className="absolute text-white -translate-y-2 text-sm italic group-hover/item:translate-y-6 transition-all duration-500">
            Intermediate
          </p>
          <p className="absolute text-white text-xl -translate-y-8 group-hover/item:translate-y-0 transition-all duration-500">
            Cisco Packet Tracer
          </p>
          <Image
            src={"/cisco.webp"}
            width={50}
            height={50}
            alt="Cisco Packet Tracer"
            className="group-hover/item:z-0 opacity-0 -translate-y-12 group-hover/item:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
