
  // Metadata for Arabic
  const arMain = {
    title: "حسونة",
    description:"إبراهيم حسونة، مطور واجهات أمامية، مطور ويب، متخصص في تطوير مواقع باستخدام Next.js، مبرمج مصري يقدم تفاصيل دقيقة لتصميم مواقع إلكترونية بأسعار مناسبة.",
    keywords: [
      "مبرمج مصري",
      "إبراهيم حسونة",
      "مطور ويب",
      "تصميم مواقع إلكترونية",
      "مطور Next.js",
    ]
};
 export const arMetadata = {
  title: {
    template: `%s - ${arMain.title}`,
    default: `${arMain.title} - الابداع التقنى`,
},
    description: arMain.description,
    charset: "UTF-8",
    robots: "index, follow",
    keywords: arMain.keywords,
    openGraph: {
      title:arMain.title,
      description:arMain.description,
      type: "website",
      url: `https://hassouna.vercel.app/ar`,
      images: 'https://csrxorwdokqeuhexiyjf.supabase.co/storage/v1/object/sign/portfolio/performance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcGVyZm9ybWFuY2UucG5nIiwiaWF0IjoxNzM4NTA1OTEwLCJleHAiOjE4OTYxODU5MTB9.t0jJPBeA4TaprokZ5_JDKXAm2QRs4Rc65rdKPB7quXU',
    },
    twitter: {
      card: "summary_large_image",
      title:arMain.title,
      description:arMain.description,
      images: 'https://csrxorwdokqeuhexiyjf.supabase.co/storage/v1/object/sign/portfolio/performance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcGVyZm9ybWFuY2UucG5nIiwiaWF0IjoxNzM4NTA1OTEwLCJleHAiOjE4OTYxODU5MTB9.t0jJPBeA4TaprokZ5_JDKXAm2QRs4Rc65rdKPB7quXU',
    },
  };

  // Metadata for English
  const enMain = {
    title: "Hassouna",
    description:"Ibrahim Hassouna, a Front-End Developer, Web Developer, specializing in building websites with Next.js. An Egyptian programmer offering detailed website designs at affordable prices.",    
    keywords: [
      "Egyptian programmer",
      "Ibrahim Hassouna",
      "Web developer",
      "Website design",
      "Next.js developer",
    ]
};
 export const enMetadata = {
    title: {
      template:`%s - ${enMain.title}`,
      default: `${enMain.title} - Technical Creativity`,
    },
    description:enMain.description,
    charset: "UTF-8",
    robots: "index, follow",
    keywords: enMain.keywords,
    openGraph: {
      title:enMain.title,
      description:enMain.description,
      type: "website",
      url: `https://hassouna.vercel.app/en`,
      images: 'https://csrxorwdokqeuhexiyjf.supabase.co/storage/v1/object/sign/portfolio/performance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcGVyZm9ybWFuY2UucG5nIiwiaWF0IjoxNzM4NTA1OTEwLCJleHAiOjE4OTYxODU5MTB9.t0jJPBeA4TaprokZ5_JDKXAm2QRs4Rc65rdKPB7quXU',
    },
    twitter: {
      card: "summary_large_image",
      title:enMain.title,
      description:enMain.description,
      images: 'https://csrxorwdokqeuhexiyjf.supabase.co/storage/v1/object/sign/portfolio/performance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcGVyZm9ybWFuY2UucG5nIiwiaWF0IjoxNzM4NTA1OTEwLCJleHAiOjE4OTYxODU5MTB9.t0jJPBeA4TaprokZ5_JDKXAm2QRs4Rc65rdKPB7quXU',
    },
  };
 