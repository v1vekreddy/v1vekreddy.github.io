"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { motion } from "motion/react";

import { instrumentSerif } from "@/config/font";
import { heroConfig } from "@/config/hero";

import { Reveal } from "../common/Reveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const HeroInfo = () => {
  const { name, description, socialLinks, professions } = heroConfig;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!professions.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % professions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <div className="mt-5 md:mt-8">
      <Reveal delay={0.3}>
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <h1
            className={`${instrumentSerif.className} text-3xl font-bold italic`}
          >
            {name}
          </h1>

        </div>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="my-2 text-center text-sm text-neutral-500 md:text-left md:text-xl">
          I&apos;m a
          <span className="text-foreground relative mx-2 border border-blue-600 px-1 py-0.5">
            {" "}
            <span className="absolute -top-0.5 -left-0.5 size-1 bg-blue-500" />
            <span className="absolute -top-0.5 -right-0.5 size-1 bg-blue-500" />
            <span className="absolute -bottom-0.5 -left-0.5 size-1 bg-blue-500" />
            <span className="absolute -right-0.5 -bottom-0.5 size-1 bg-blue-500" />
            AI and ML Engineer
          </span>
          &{" "}
          <span className="relative mt-3 inline-grid h-[1.5em] min-w-[11ch] text-left align-bottom font-medium text-neutral-900 md:mt-0 md:h-auto dark:text-neutral-100">
            {professions.map((profession, i) => (
              <motion.span
                key={profession}
                initial={false}
                animate={{
                  opacity: index === i ? 1 : 0,
                  filter: index === i ? "blur(0px)" : "blur(4px)",
                  y: index === i ? 0 : 5,
                }}
                transition={{ duration: 0.3 }}
                className={`col-start-1 row-start-1 whitespace-nowrap ${
                  index === i ? "relative" : "pointer-events-none absolute"
                }`}
              >
                {profession}
              </motion.span>
            ))}
          </span>
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="my-2 text-center text-sm md:text-left md:text-base">
          {description}
        </p>
      </Reveal>
      <Reveal delay={0.5}>
        <TooltipProvider>
          <div className="my-3 flex w-fit items-center justify-center gap-2 md:justify-start">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger>
                    <Link
                      key={item.id}
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="flex size-8 items-center justify-center"
                    >
                      <Icon className="size-7 text-[#909092]" />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </Reveal>
    </div>
  );
};
