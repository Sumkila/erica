import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dotted border-muted-foreground/30 mt-16">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground font-code">
        <p>&copy; {new Date().getFullYear()} Erica Core. All rights reserved. Engineered with precision.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="hover:text-accent transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-accent transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-accent transition-colors">Github</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
