import { experience } from "@/config/experience";
import { instrumentSerif } from "@/config/font";
import { Experience as Exp } from "@/svgs/essentials/Experience";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";

export function Experience() {
 return <Container>
  <Heading as="h2" className="-ml-1.5 flex items-center gap-2" Icon={<Exp className="size-6" />}>Experience</Heading>
  <div className="relative mt-8">
   <div className="absolute -top-5 bottom-0 left-1.25 w-px bg-neutral-800 dark:bg-neutral-600" />
   <div className="flex flex-col gap-8">
    {experience.map(item => <article key={item.id} className="relative py-2">
     <span className="ring-background absolute top-3.5 left-0 z-10 size-2.75 rounded-full bg-neutral-500 ring-4" />
     <div className="pl-8">
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
       <div>
        <h3 className={`${instrumentSerif.className} text-2xl font-normal text-neutral-800 dark:text-neutral-200`}>{item.post}</h3>
        <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">{item.company}</p>
       </div>
       <div className="text-sm text-neutral-500 sm:text-right">
        <p>{item.duration}</p><p className="mt-1">{item.place}</p>
       </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>
      <div className="mt-5 space-y-4">
       <div>
        <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200">Technologies &amp; Tools</h4>
        <div className="flex flex-wrap gap-2">{item.technologies.map(({name}) => <span key={name} className="rounded-md border border-dashed border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground">{name}</span>)}</div>
       </div>
       <div>
        <h4 className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">What I did</h4>
        <ul className="list-disc space-y-2 pl-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.points.map(point => <li key={point}>{point}</li>)}</ul>
       </div>
      </div>
     </div>
    </article>)}
   </div>
  </div>
 </Container>;
}
