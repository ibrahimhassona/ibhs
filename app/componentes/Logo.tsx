import Link from "next/link";

const Logo = () => {
  return (
    <div className="font-medium  text-black  text-3xl hover:text-black transition-all duration-300 rounded-sm w-fit cursor-pointer">
      <Link href="/" className="font-roboto flex items-center justify-center">
      &#60;
      <span className="font-medium tracking-[1px] font-poppins transition-all duration-300 hover:bg-black text-xl bg-sky text-white rounded-sm px-[3px]">IBHS</span>&#62;
    </Link>
    </div>
  );
};

export default Logo;
