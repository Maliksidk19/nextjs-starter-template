import { siteConfig } from "@/config";

export const generateMetaData = ({
  canonicalUrlRelative,
  title,
  description,
  keywords,
}: {
  canonicalUrlRelative?: string;
  title?: string;
  description?: string;
  keywords?: string[];
}) => {
  return {
    title: title || siteConfig.title,
    description: description || siteConfig.description,
    keywords: keywords || siteConfig.keywords,
    applicationName: siteConfig.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${siteConfig.domainName}/`
    ),
    openGraph: {
      title: siteConfig.title,
      description: description || siteConfig.description,
      url: `https://${siteConfig.domainName}/`,
      siteName: siteConfig.appName,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: siteConfig.title,
      description: description || siteConfig.description,
      card: "summary_large_image",
      creator: "",
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),
  };
};