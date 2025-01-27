
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
  };
 