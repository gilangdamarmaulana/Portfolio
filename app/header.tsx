import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex flex-row justify-center gap-10 items-center p-4 ">
      <Link href={"#about"} className="text-white hover:text-purple-500">
        About Me
      </Link>
      <Link href={"#skills"} className="text-white hover:text-purple-500">
        Skills
      </Link>
    </header>
  );
};
