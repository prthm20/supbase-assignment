import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe Subscription starter",
    description:
      "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
    link: "#",
  },
  {
    title: "Next.js Starter",
    description:
      "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Ai cahtbot",
    description:
      "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
    link: "#",
  },
  {
    title: "Langchain+Next.js starter",
    description:
      "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
    link: "#",
  },
  {
    title: "Flutter User Management",
    description:
      "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
    link: "#",
  },
  {
    title: "Expo React Native Starter",
    description:
      "An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.",
    link: "#",
  },
];
