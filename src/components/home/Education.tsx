import Image from "next/image";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
export function Education() {
 return <Container>
  <Heading as="h2">Education</Heading>
  <div className="mt-8 flex items-start gap-4">
   <Image src="/logos/iit-guwahati.png" alt="IIT Guwahati logo" width={52} height={52} className="shrink-0 rounded-lg bg-white p-1" />
   <div className="min-w-0 space-y-2">
    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Indian Institute of Technology Guwahati</h3>
    <p className="text-sm text-neutral-600 dark:text-neutral-400">B.Tech. in Mathematics and Computer Science</p>
    <p className="text-sm text-neutral-500">2022 - 2026</p>
    <ul className="list-disc space-y-2 pl-4 text-sm leading-6 text-neutral-500">
     <li>Member of the Coding Club and Students&apos; Web Committee, contributing to app development and DevOps teams.</li>
     <li>Contributed to OneStop and other open-source repositories at IIT Guwahati; recognized as a top contributor during Hacktoberfest.</li>
     <li>Represented IIT Guwahati in the inaugural Inter-IIT Matiks competition, placing third among eight participating IITs.</li>
    </ul>
   </div>
  </div>
 </Container>;
}
