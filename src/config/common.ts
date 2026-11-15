import { CircleUserRound, ScrollText } from "lucide-react";

import { Briefcase } from "lucide-react";
import { Home } from "@/svgs/essentials/Home";
import { Project } from "@/svgs/essentials/Project";
import { Github } from "@/svgs/socials/Github";
import { X } from "@/svgs/socials/X";

export const navItems = [
  { id: 1, name: "Home", icon: Home, value: "/" },
  { id: 2, name: "Experience", icon: Briefcase, value: "/work" },
  { id: 3, name: "Projects", icon: Project, value: "/projects" },
  { id: 4, name: "Resume", icon: ScrollText, value: "https://drive.google.com/file/d/1ZKZkrltONeVqQ4238UbZ5IHSVpFeZGAL/view?usp=sharing" },
  { id: 5, name: "Contact", icon: CircleUserRound, value: "/contact" },
];

export const navSocialLinks = [
  { id: 1, name: "Github", icon: Github, value: "https://github.com/v1vekreddy" },
  { id: 2, name: "LinkedIn", icon: X, value: "https://www.linkedin.com/in/vivekreddyr/" },
];

export const setupConfig = [
  {
    title: "Gears",
    href: "/gears",
    description: "Tools, devices, and software I use to get work done.",
  },
  {
    title: "Setup",
    href: "/setup",
    description: "VS Code / Cursor configuration and extensions guide.",
  },
];

export const personalConfig = [
  {
    title: "Books",
    href: "/books",
    description: "Books that shaped my mindset and challenged my perspective.",
  },
  {
    title: "Movies",
    href: "/movies",
    description: "Movies and shows that have inspired and entertained me.",
  },
];

export const footerLinks = [{name:"Home",href:"/"},{name:"Experience",href:"/work"},{name:"Projects",href:"/projects"},{name:"Resume",href:"https://drive.google.com/file/d/1ZKZkrltONeVqQ4238UbZ5IHSVpFeZGAL/view?usp=sharing"},{name:"Contact",href:"mailto:vivekreddyiitg@gmail.com"}];

export const contactConfig = {
  title: "Contact",
  desc: "Get in touch with me. I will get back to you as soon as possible.",
  from: {
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "your.email@example.com",
      phone: "+1 (555) 123-4567",
      message: "Tell me about your project...",
    },
    submitButton: "Send Message",
    succesMessage: "Thanks for your message! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again",
  },
};
