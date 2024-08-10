import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="flex flex-col justify-center md:flex-row-reverse md:justify-end items-center h-screen md:h-80 w-screen bg-neutral-950"
      id="about"
    >
      <div className="relative w-1/2 h-[200px] block md:hidden">
        <Image
          src={"/me.jpeg"}
          alt={"Gilang"}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-row items-center">
        <div className="relative w-1/3 h-[300px] hidden md:block ml-20">
          <Image
            src={"/me.jpeg"}
            alt={"Gilang"}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="flex-col w-full flex h-1/2 md:items-end items-center">
          <h1 className="text-6xl text-white w-1/2 h-1/2 font-serif">About</h1>
          <p className="text-xl text-white mt-4 w-1/2">
            My name is Gilang Damar Maulana. I'm a college student in Ahmad
            Dahlan University. My hobby are the gym and trying new things.
          </p>
          <div className="flex flex-row w-1/2">
            <div className="group">
              <div className="flex flex-row mt-4 justify-center rounded-full border px-4 py-2 group-hover:bg-purple-500 bg-white">
                <DocumentArrowDownIcon className="size-6 group-hover:text-black" />
                <Link
                  href={"/cv.pdf"}
                  download="cv"
                  className="ml-2 group-hover:text-black"
                >
                  CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
