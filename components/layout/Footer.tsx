import Link from "next/link";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <Container>
        <div className="flex flex-col items-center text-center justify-between gap-6 md:flex-row">
    
        

          <p className="text-sm text-zinc-500">
            © 2026 YASPN. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}