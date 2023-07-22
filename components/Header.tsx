import Link from "next/link";
import Image from "next/image";
import Me from "../images/me.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={Me}
            width={50}
            height={50}
            alt="logo"
          />
          <h1>Fasih</h1>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-yellow-500 flex items-center rounded-full text-center"
        >
          Sign Me Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
