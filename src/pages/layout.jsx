import Link from "next/link";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="tabWrapper">
        <Link href={"/posts/1"}>/posts/1</Link>
        <Link href={"/posts/2"}>/posts/2</Link>
        <Link href={"/posts/3"}>/posts/3</Link>
        <Link href={"/posts/4"}>/posts/4</Link>
      </nav>
      {children}
    </section>
  );
}
