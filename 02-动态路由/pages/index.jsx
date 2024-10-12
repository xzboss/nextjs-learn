
import localFont from "next/font/local";
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

export default function Home(a) {
  console.log(a, "@@");
  const tabs = ["/about", "/center","/posts/001","/posts/002"];
  return (
    <div className="tabWrapper">
      {tabs.map((item) => {
        return <Link children={item} href={item} />;
      })}
      <img src="/favicon.ico" alt="" />
    </div>
  );
}
