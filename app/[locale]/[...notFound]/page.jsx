import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
    const t = useTranslations("Sidebar") 
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 ">

            <div className="text-center">
                <h1 className="text-9xl max-sm:text-[70px] text-primary font-bold mb-4">{t("404")}</h1>
                <h2 className="text-2xl font-semibold max-sm:text-lg mb-4">{t("pageNotFound")}</h2>
                <p className="max-w-md max-sm:text-sm mx-auto">{t("description")}</p>

                {/* Return to Home button */}
                <Link
                    href="/"
                    className="inline-block max-sm:text-sm mt-8 max-sm:py-2 max-sm:px-4 px-6 py-3 bg-primary text-white rounded-md hover:bg-emerald-600 cust-trans"
                >
                    {t("returnToHome")}
                </Link>
            </div>


        </div>
    );
}