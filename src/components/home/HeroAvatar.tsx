import Image from "next/image";
import { AvailableBadge } from "../common/AvailableBadge";
import { Reveal } from "../common/Reveal";

export function HeroAvatar() {
 return <div className="relative">
  <Reveal>
   <div className="relative mx-auto my-3 h-28 w-full max-w-3xl overflow-hidden rounded-2xl shadow-md sm:h-36 md:h-40">
    <Image fill src="/assets/sukuna.gif" alt="Animated anime cover" priority unoptimized sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
   </div>
  </Reveal>
  <Reveal delay={0.1}>
   <div className="mt-4 flex justify-center md:justify-end"><AvailableBadge /></div>
  </Reveal>
 </div>;
}
