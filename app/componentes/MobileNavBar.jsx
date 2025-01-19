import { Home, FolderKanban, Code, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";

const MobileNavBar = () => {
  const navItems = [
    { icon: <Home size={20} />, url: "/", label: "Home" },
    { icon: <FolderKanban size={20} />, url: "/projects", label: "Projects" },
    { icon: <Code size={20} />, url: "/skills", label: "Skills" },
    { icon: <FileText size={20} />, url: "/posts", label: "Posts" },
    { icon: <Mail size={20} />, url: "/contact", label: "Contact" },
    { icon: <CiMenuKebab size={20} />, url: "/contact", label: "Menu" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0  hidden max-md:block">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="flex flex-col items-center justify-center"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavBar;