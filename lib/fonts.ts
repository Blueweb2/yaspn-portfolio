import localFont from "next/font/local";

export const roobert = localFont({
  src: [
    {
      path: "../public/fonts/RoobertTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/RoobertTRIAL-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/RoobertTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-roobert",
  display: "swap",
});