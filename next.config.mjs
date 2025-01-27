import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['mydsfjnfsyjrbcltsgrb.supabase.co','csrxorwdokqeuhexiyjf.supabase.co'],
      },
    
};

export default withNextIntl(nextConfig);
