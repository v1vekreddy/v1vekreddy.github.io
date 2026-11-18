import Image from "next/image";
import { caveat } from "@/config/font";
import { AvailableBadge } from "../common/AvailableBadge";
import { Reveal } from "../common/Reveal";

export function HeroAvatar() {
 return <div className="relative">
  <Reveal>
   <div className="relative mx-auto my-3 h-20 w-full max-w-xs overflow-hidden rounded-2xl shadow-sm sm:h-24">
    <Image fill src="/assets/sukuna.gif" alt="Animated anime cover" priority unoptimized sizes="(max-width: 352px) calc(100vw - 32px), 320px" className="object-cover" />
   </div>
  </Reveal>
  <a href="mailto:vivekreddyiitg@gmail.com" className={`${caveat.className} hire-note absolute left-0 top-3 hidden -rotate-12 text-2xl text-neutral-500 transition-colors hover:text-foreground lg:block`}>
   HIRE ME
   <svg viewBox="0 0 100 90" fill="none" aria-hidden="true" className="ml-8 h-16 w-20 rotate-12"><path d="M10 8 Q12 58 82 76 M63 61 L83 77 L60 81" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </a>
  <Reveal delay={0.1}>
   <div className="mt-4 flex justify-center md:justify-end"><AvailableBadge /></div>
  </Reveal>
 </div>;
}
