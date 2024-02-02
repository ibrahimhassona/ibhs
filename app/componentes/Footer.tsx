import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" text-white">
      <div className="bg-sky p-5">
        <p className="container  text-center font-roboto">
          Copyright &copy;{date.getFullYear()} <Link href="/" className="text-sky-500">IBHS</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
