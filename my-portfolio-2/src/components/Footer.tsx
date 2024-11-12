import Image from "next/image";
import Link from "next/link";

// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://github.com/muhammadhamza718" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
          <Image src="/github.png" alt="GitHub" className="w-full h-full" width={300} height={300}/>
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-hamza-816290320" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
          <Image src="/linkedin.png" alt="LinkedIn" className="w-full h-full" width={300} height={300}/>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100089787627729" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
          <Image src="/facebook.png" alt="Facebook" className="w-full h-full" width={300} height={300}/>
        </Link>
      </div>
      <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Muhammad Hamza. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
