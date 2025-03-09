import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // استثناء ملفات الـ sitemap و robots.txt وأي ملفات أخرى مهمة
    '/((?!api|_next|_vercel|.*\\..*|sitemap.*\\.xml|robots.txt).*)',

    // السماح بالمسارات الأخرى مع دعم اللغات
    '/([\\w-]+)?/users/(.+)'
  ]
};
