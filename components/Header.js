import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";
const montserrat_alter = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "900",
});

export default function Header() {
  return (
    <header className="px-36 bg-primary flex justify-between fixed z-10 top-0 left-0 right-0 items-center py-4 shadow-lg">
      <Link
        href="/"
        className={`text-3xl ${montserrat_alter.className} font-black`}
      >
        RSSMaster
      </Link>
      <nav class="font-bold text-lg ">
        <Link href="/" className="px-4">Home</Link>
        <Link href="/about" className="px-4">About</Link>
        <Link href="/contact" className="px-4">Contact</Link>
        <Link href="/rss" className="px-4">What is RSS?</Link>
      </nav>
    </header>
  );
}
