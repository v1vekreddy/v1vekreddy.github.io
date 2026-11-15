import Image from "next/image";
import { caveat } from "@/config/font";
import { AvailableBadge } from "../common/AvailableBadge";
import { Reveal } from "../common/Reveal";

export function HeroAvatar() {
 return <div className="relative">
  <Reveal>
   <div className="relative mx-auto my-5 h-42 w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl sm:h-72 md:h-80">
    <Image fill src="/assets/sukuna.gif" alt="Animated anime cover" priority unoptimized sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
   </div>
  </Reveal>
  <a href="mailto:vivekreddyiitg@gmail.com" className={`${caveat.className} hire-note absolute -left-28 top-1/2 hidden -rotate-12 text-2xl text-neutral-500 transition-colors hover:text-foreground lg:block`}>
   HIRE ME
   <svg viewBox="0 0 100 90" fill="none" aria-hidden="true" className="ml-8 h-16 w-20 rotate-12"><path d="M10 8 Q12 58 82 76 M63 61 L83 77 L60 81" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </a>
  <Reveal delay={0.1}>
   <div className="mt-4 flex justify-center md:justify-end"><AvailableBadge /></div>
  </Reveal>
 </div>;
}
