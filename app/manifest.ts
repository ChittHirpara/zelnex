import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zelnex Pharmaceuticals Pvt. Ltd.",
    short_name: "Zelnex Pharma",
    description:
      "Global Finished Generic Formulations & CTD/eCTD Dossier Export Powerhouse",
    start_url: "/",
    display: "standalone",
    background_color: "#082B61",
    theme_color: "#082B61",
    icons: [
      {
        src: "/brand/zelnex-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/zelnex-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
