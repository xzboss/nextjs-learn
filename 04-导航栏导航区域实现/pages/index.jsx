import localFont from "next/font/local";
import PostsLayout from "./posts/layout";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
import DashboardLayout from "./layout";

export default function Home(a) {
  console.log(a, "@@");
  const tabs = ["/about", "/center", "/posts/001", "/posts/001", "/posts/002/002-001"];
  return 'hello';
}
