import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";

// 참고용
const weightNames = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Normal: 400, //Regular
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
};

export const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
export const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], display: "swap" });
export const pretendard = localFont({
  src: [
    {
      path: "./assets/fonts/Pretendard/Pretendard-Thin.subset.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-ExtraLight.subset.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-Light.subset.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./assets/fonts/Pretendard/Pretendard-Black.subset.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
