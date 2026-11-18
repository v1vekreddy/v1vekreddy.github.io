import Image from "next/image";
import { AvailableBadge } from "../common/AvailableBadge";
import { Reveal } from "../common/Reveal";

export function HeroAvatar() {
 return <div className="relative">
  <Reveal>
   <div className="relative mx-auto my-3 h-20 w-full max-w-xs overflow-hidden rounded-2xl shadow-sm sm:h-24">
    <Image fill src="/assets/sukuna.gif" alt="Animated anime cover" priority unoptimized sizes="(max-width: 352px) calc(100vw - 32px), 320px" className="object-cover" />
   </div>
  </Reveal>
  <Reveal delay={0.1}>
   <div className="mt-4 flex justify-center md:justify-end"><AvailableBadge /></div>
  </Reveal>
 </div>;
}
