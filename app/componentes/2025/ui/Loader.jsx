import React from 'react';
import '../../../[locale]/loader.css';
import { useLocale } from 'next-intl';


const HassLoader = ({style}) => {
    const locale = useLocale()
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen   w-full  ${style}`}>
      <div className="p-8  rounded-lg flex flex-col ">
{    locale=='ar'?    <span className="text-3xl max-sm:text-lg py-1 text-transparent animate-hassouna-rtl text-arabic" dir="rtl">
           حــســونـة
        </span>:
        <span className="text-3xl max-sm:text-lg text-transparent animate-hassouna-ltr text-english">
          Hassouna
        </span>}
      </div>
    </div>
  );
};

export default HassLoader;