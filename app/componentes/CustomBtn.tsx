import Link from "next/link";
import { styleProp } from "../type";


const CustomBtn = ({ style, to, content ,target,offset }: styleProp) => {
  return (
    <Link
      href={to}
      target={target}
      
      className={`${style} font-medium uppercase mytransition tracking-[1px]`}
    >
      {content}
    </Link>
  );
};

export default CustomBtn;
