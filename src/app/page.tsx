import { Suspense } from "react";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Education } from "@/components/home/Education";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { OpenWork } from "@/components/home/OpenWork";
import { Projects } from "@/components/home/Projects";
import { SkillsCarousel } from "@/components/home/SkillsCarousel";

const Page = async () => {
  return (
    <Container className="mt-5 px-4 md:px-6 lg:px-0">
      <Hero />

<Reveal delay={0.6}>
        <SkillsCarousel />
      </Reveal>

<Reveal delay={0.2}>
        <OpenWork />
      </Reveal>

      <Reveal delay={0.2}>
        <Experience />
      </Reveal>

      <Reveal delay={0.2}>
        <Education />
      </Reveal>

      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects />
      </Suspense>

    </Container>
  );
};

export default Page;
