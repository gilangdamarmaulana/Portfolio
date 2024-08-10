import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center space-x-4 mt-4 md:mt-0 h-full">
      <div className="flex flex-col h-[200px] w-full">
        <p className="text-4xl mt-20 text-white w-full text-center">
          Stay Connected
        </p>
        <div className="flex flex-row w-full justify-center gap-6 mt-4 h-[75px] align-middle items-center">
          <Link href="https://www.instagram.com/bdfrll/" className="group/item">
            <div className="flex flex-row-reverse items-center gap-2 text-white group-hover/item:border group-hover/item:px-3 group-hover/item:py-2 rounded-full transition-all duration-300">
              <p className="hidden group-hover/item:block transition-all duration-300">
                Instagram
              </p>
              <Image
                src={"/instagram.png"}
                alt={"instagram image"}
                width={40}
                height={40}
              />
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/gilangdamar.maulana.7?locale=id_ID"
            className="group/item"
          >
            <div className="flex flex-row-reverse items-center gap-2 text-white group-hover/item:border group-hover/item:px-3 group-hover/item:py-2 rounded-full transition-all duration-300">
              <p className="hidden group-hover/item:block opacity-0 group-hover/item:opacity-100 transition-all duration-1000">
                Facebook
              </p>
              <Image
                src={"/facebook.svg"}
                alt={"facebook image"}
                width={40}
                height={40}
              />
            </div>
          </Link>
          <Link
            href="https://github.com/gilangdamarmaulana"
            className="group/item"
          >
            <div className="flex flex-row-reverse items-center gap-2 text-white group-hover/item:border group-hover/item:px-3 group-hover/item:py-2 rounded-full transition-all duration-300">
              <p className="hidden group-hover/item:block transition-all duration-300">
                GitHub
              </p>
              <Image
                src={"/github.svg"}
                alt={"github image"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex my-10 flex-col items-end h-1/2 w-full pr-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg text-white font-bold">My Portofolio</h2>
          <p className="text-sm text-white">
            © 2024 My Portofolio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
