import Link from "next/link";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-3xl font-black tracking-wider">
              YASPN
            </h2>

            <p className="mt-2 text-zinc-500">
              Building a better tomorrow.
            </p>
          </div>

          <div className="flex gap-6 text-zinc-400">
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 YASPN. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}